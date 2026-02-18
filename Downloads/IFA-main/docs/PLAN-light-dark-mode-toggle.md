# Plan: Light/Dark Mode Toggle on Navbar

## Goal
Add a small, cool-looking button on the navbar that toggles between **dark mode** (current) and **light mode**. One click turns light mode on; another click returns to dark.

---

## Current State
- **Layout** (`app/layout.tsx`): `<html>` has hardcoded `className="dark scroll-smooth"`.
- **Theme** (`app/globals.css`): All colors are defined in `:root` (dark palette: `#050505` background, `#ededed` foreground, purple/cyan brand). No light palette exists yet.
- **Navbar** (`components/Navbar.tsx`): Client component; desktop links + “Book Demo” on the right, mobile hamburger on the left. Good place to add the toggle next to “Book Demo” (desktop) and inside the mobile menu.

---

## ⚠️ Avoiding UI clash (white text on white, invisible borders)

**If we only add light-theme CSS variables and do not change component classes, the UI will clash in light mode.** The codebase uses many **hardcoded dark-only** Tailwind classes that do not use CSS variables. Those will not change when `html.light` is set.

### What would go wrong without fixes

| Problem | Cause | Result in light mode |
|--------|--------|----------------------|
| Invisible headings/text | `text-white` used in Hero, Process, Footer, Team, Portfolio, etc. | White text on light background = **unreadable** |
| Wrong section backgrounds | `bg-[#050505]`, `bg-[#0a0a0a]`, `bg-[#030303]`, `bg-black` in Process, Philosophy, FutureTeaser, Technology, etc. | Sections stay black/dark on a light page = **inconsistent** |
| Invisible borders | `border-white/5`, `border-white/10` everywhere | White borders on light = **invisible** |
| Washed-out surfaces | `bg-white/5`, `bg-white/10` for cards/inputs | Very faint on light; some elements may look broken |

So: **adding only `html.light` CSS variables is not enough.** We must also make these classes theme-aware so they resolve to the right color in each mode.

### Strategy: theme-aware classes (no clash)

Use **one** of these two approaches so the same class works in both themes:

1. **Semantic tokens (recommended)**  
   Replace hardcoded colors with tokens that already map to CSS variables (and will get light values in `html.light`):
   - `text-white` → **`text-foreground`** (set `--foreground` to dark in light mode so text is always readable).
   - `bg-[#050505]`, `bg-[#0a0a0a]`, `bg-[#030303]`, `bg-black` → **`bg-background`** or **`bg-card`** (set light values in `html.light`).
   - `border-white/5`, `border-white/10` → **`border-border`** (define `--border` per theme: e.g. `rgba(0,0,0,0.08)` for light, current for dark).
   - `bg-white/5`, `bg-white/10` → **`bg-foreground/[0.06]`** / **`bg-foreground/10`** (foreground is light in dark mode and dark in light mode, so this gives a subtle tint in both).
   - Keep `text-primary`, `text-secondary`, `text-muted-foreground` as-is; ensure their variables have good contrast in both themes.

2. **Tailwind `dark:` variant**  
   Keep current classes as the light-mode default and add `dark:` for dark mode (e.g. `text-foreground dark:text-white`). This works but duplicates classes in many places; the token approach is cleaner.

### Files that need theme-aware replacements

From the codebase audit, these files contain hardcoded `text-white`, `bg-black`, `bg-[#...]`, `border-white/*`, or `bg-white/*` and should be updated:

- `components/Hero.tsx`
- `components/Process.tsx`
- `components/Philosophy.tsx`
- `components/Portfolio.tsx`
- `components/Team.tsx`
- `components/Footer.tsx`
- `components/LiveTicker.tsx`
- `components/FutureTeaser.tsx`
- `components/Navbar.tsx`
- `app/technology/page.tsx`
- `app/coming-soon/page.tsx`
- `app/book-demo/page.tsx` (borders/surfaces only; `bg-card` is already token-based)

**Note:** `app/coming-soon/page.tsx` is an intentionally dark "Project 74" teaser; we can leave it dark-only or add a light variant later.

### Summary

- **Yes, the UI will clash** if we only add the toggle and light CSS variables.
- **No clash** if we (1) add `html.light` variables **and** (2) replace the hardcoded dark-only classes with theme-aware tokens in the listed files. Then text, backgrounds, and borders stay visible and consistent in both modes.

---

## Implementation Plan

### 1. Define light theme in CSS
**File:** `web/app/globals.css`

- Keep current variables as the **dark** theme by scoping them under `html.dark` (or leave `:root` as-is and add light overrides; see below).
- **Recommended approach:**  
  - Keep `:root` as the **dark** palette (no structural change to existing vars).  
  - Add a block `html.light { ... }` with light-mode overrides, e.g.:
    - `--background`: e.g. `#fafafa` or `#f5f5f5`
    - `--foreground`: e.g. `#171717`
    - `--muted`: lighter gray
    - `--muted-foreground`: darker gray for contrast
    - `--card`: white or off-white
    - `--border`: light gray
  - Optionally adjust `--primary` / `--secondary` slightly for light (e.g. deeper shades so they’re visible on white).
- Update any **hardcoded dark-only** styles (e.g. `body` background image, glass panels, scrollbar) to use CSS variables or add `html.light` overrides so they look good in light mode.

### 2. Theme persistence and initial class (avoid flash)
**Files:** `web/app/layout.tsx`, optional small inline script or a dedicated `ThemeScript` component.

- **Persistence:** Store preference in `localStorage` with a key like `theme` and values `"light"` | `"dark"`.
- **Initial theme:** On first visit, default to `"dark"` (current behavior). Optionally later: respect `prefers-color-scheme` for first load, then override once the user clicks the toggle.
- **Avoid flash:** Run a tiny script **before** React hydrates so the correct theme is applied on first paint:
  - In `layout.tsx`, add an inline `<script>` in `<head>` or at start of `<body>` that:
    - Reads `localStorage.getItem('theme')`.
    - If `"light"`, sets `document.documentElement.classList.add('light')` and removes `"dark"`.
    - If `"dark"` or missing, sets `document.documentElement.classList.add('dark')` and removes `"light"`.
    - Ensures `scroll-smooth` is kept on `<html>`.
  - Alternatively, a small client component that runs once and does the same can be used, but an inline script is more reliable for zero flash.

### 3. Control `<html>` class from layout
**File:** `web/app/layout.tsx`

- **Option A (simplest):** Remove the hardcoded `dark` from `<html>`. Let the inline script above be the single source of truth: it sets `dark` or `light` on first run; the toggle (next step) updates class + localStorage on click. So initial server-rendered HTML might have no theme class until the script runs (or we add a default `dark` in the server HTML and the script overwrites if needed).
- **Option B:** Keep `className="dark scroll-smooth"` as default and have the script only run when `localStorage` says `"light"` (so we only touch the DOM when switching to light). Toggle button then switches between `dark` and `light` and updates localStorage.
- Recommendation: Default server HTML to `className="dark scroll-smooth"`. Inline script: if `localStorage.theme === 'light'`, replace `dark` with `light`; otherwise leave as is. This minimizes flash and keeps default dark.

### 4. Theme toggle component (client)
**New file:** e.g. `web/components/ThemeToggle.tsx`

- **Client component** (`'use client'`).
- **Behavior:**
  - Read current theme: check `document.documentElement.classList.contains('light')` (or use a tiny React state synced with that).
  - On click: toggle between `light` and `dark`:
    - Update `<html>` class: add `light` and remove `dark`, or vice versa; keep `scroll-smooth`.
    - Write to `localStorage.setItem('theme', 'light' | 'dark')`.
  - Optional: use a React context so other components can react to theme, or keep it simple with direct DOM + localStorage.
- **UI:** Small, cool-looking button:
  - **Icon:** Use `lucide-react`: **Sun** when current theme is dark (click to switch to light), **Moon** when current theme is light (click to switch to dark). So icon = “the mode you’ll switch to” or “the other mode”.
  - **Style:** Round or rounded-square icon button, subtle (e.g. `border border-white/10`, `hover:bg-white/5`), maybe a soft glow or transition. Match navbar’s existing glass/blur and border style.
  - **Accessibility:** `aria-label` e.g. “Switch to light mode” / “Switch to dark mode”, and optionally `title` tooltip.
- **Animation:** Optional: Framer Motion for a quick icon scale or rotation on toggle to make it feel “cool” and responsive.

### 5. Integrate toggle into Navbar
**File:** `web/components/Navbar.tsx`

- **Desktop:** In the right-side block (with the nav links and “Book Demo” button), add the theme toggle **before** the “Book Demo” button so the order is: links → **ThemeToggle** → “Book Demo”. Keeps CTA prominent and the toggle visible but secondary.
- **Mobile:** In the mobile menu overlay, add the same **ThemeToggle** at the top-right of the menu or next to the close button so it’s reachable without scrolling; or at the bottom of the link list. Ensure tap target is at least 44px.
- Reuse the same `<ThemeToggle />` component in both places so behavior and style stay in sync.

### 6. Optional: Light-mode-specific tweaks
**Files:** `app/globals.css`, possibly `app/layout.tsx` or `app/page.tsx`

- **Grid background:** Layout has `bg-grid-white/[0.02]`; in light mode you may want a subtle dark grid instead, e.g. `bg-grid-black/[0.04]` when `html.light` (via Tailwind or a small utility class toggled by theme).
- **Decorative blurs:** Page has `bg-primary/5` and `bg-secondary/5` blurs; ensure they don’t disappear or look harsh in light mode (variables should handle this if they’re theme-aware).
- **Glass panels:** `.glass-panel` and `.glass-card` use dark rgba; add `html.light` variants (lighter background, darker border) if used in hero/footer so they don’t look out of place.

### 7. Testing checklist
- [ ] Default load: dark mode, no flash.
- [ ] Click toggle once: switches to light, navbar and entire page use light palette.
- [ ] Click again: switches back to dark.
- [ ] Refresh: theme persists (light stays light, dark stays dark).
- [ ] Desktop and mobile: toggle visible and working in both.
- [ ] No layout shift or overflow when toggling; smooth transition if we add a short transition on `color`/`background` in CSS.

---

## File summary

| Action | File |
|--------|------|
| Add light theme variables and any overrides | `web/app/globals.css` |
| Add inline theme script + keep default `dark` on `<html>` | `web/app/layout.tsx` |
| Create theme toggle button component | `web/components/ThemeToggle.tsx` (new) |
| Add ThemeToggle to desktop and mobile nav | `web/components/Navbar.tsx` |
| Optional: grid/glass light-mode tweaks | `web/app/globals.css`, layout/page if needed |

---

## Order of implementation (recommended)
1. **globals.css** – Add `html.light { ... }` with light values for `--background`, `--foreground`, `--muted`, `--card`, `--border`, etc., and any light-mode utility overrides (grid, glass).
2. **Theme-aware replacements (no clash)** – In the listed components/pages, replace `text-white` → `text-foreground`, `bg-[#...]`/`bg-black` → `bg-background`/`bg-card`, `border-white/*` → `border-border`, `bg-white/*` → `bg-foreground/10` (or equivalent). This step is **required** so light mode does not show white text on white or invisible borders.
3. **layout.tsx** – Add inline script for initial theme and keep `dark` as default.
4. **ThemeToggle.tsx** – Implement toggle logic and the small Sun/Moon button (use theme-aware classes for the button itself).
5. **Navbar.tsx** – Add `<ThemeToggle />` on desktop and in mobile menu.
6. **Test** – Toggle, refresh, and check home + subpages in both themes; confirm no invisible text or borders.
7. **Polish** – Optional Framer Motion and light-mode-only tweaks for grid/glass.

This ensures the UI does not clash in light mode (text and borders stay visible) and the toggle works consistently everywhere.
