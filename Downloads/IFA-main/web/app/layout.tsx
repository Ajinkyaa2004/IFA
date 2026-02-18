import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Insight Fusion Analytics | Enterprise-Grade Algorithmic Trading',
  description: 'Transforming Data into Insights. We specialize in algorithmic trading system development with a unique zero-coding approach.',
  keywords: ['Algorithmic Trading', 'Data Analytics', 'AI', 'Machine Learning', 'FinTech', 'Stock Market', 'Business Automation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=document.documentElement.classList,v=localStorage.getItem('theme');if(v==='light'){t.remove('dark');t.add('light');}else{t.remove('light');t.add('dark');}})();`,
          }}
        />
      </head>
      <body className={clsx(inter.variable, jetbrainsMono.variable, "antialiased bg-background text-foreground selection:bg-primary selection:text-white")}>
        <div className="fixed inset-0 z-[-1] page-grid" />
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
