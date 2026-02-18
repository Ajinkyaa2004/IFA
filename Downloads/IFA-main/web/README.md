# Insight Fusion Analytics (IFA) Rewrite

This is the new, enterprise-grade website for Insight Fusion Analytics, built with Next.js 16, Tailwind CSS v4, TypeScript, and Framer Motion.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    cd web
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌟 Key Features

-   **Premium Dark Theme**: Uses deep purple/cyan branding for a modern data analytics aesthetic.
-   **Interactive Animations**: Powered by Framer Motion (Hero typing, Floating widgets, Scroll-triggered reveals).
-   **Zero-Coding Emphasis**: Clear messaging about the USDF -> AI -> Execution pipeline.
-   **Responsive Design**: Mobile-friendly Navbar and Layout for networking events.
-   **Coming Soon Page**: Dedicated landing page for the "Project 77" Agent System.

## 📁 Project Structure

-   `app/page.tsx`: Main Landing Page (Hero, Process, Portfolio).
-   `app/coming-soon/page.tsx`: Future Plans / Waitlist page.
-   `components/`: Reusable UI components.
    -   `Hero.tsx`: 3D Widgets & Typing effect.
    -   `Process.tsx`: USDF Workflow.
    -   `Portfolio.tsx`: Bento Grid showcasing projects.
-   `app/globals.css`: Custom animations & Tailwind theme.

## 🎨 Asset Management

-   Icons are provided by `lucide-react`.
-   No external image assets are currently required (CSS-only visuals for performance).

## 📝 Customization

-   Update `app/globals.css` to tweak brand colors.
-   Edit `components/Portfolio.tsx` to add real client case studies.
