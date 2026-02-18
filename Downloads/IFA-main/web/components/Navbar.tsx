'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button, cn } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ThemeToggle';

const links = [
    { href: '/#about', label: 'Offerings' },
    { href: '/#process', label: 'Process' },
    { href: '/#work', label: 'Portfolio' },
    { href: '/#why-us', label: 'Why Us' },
    { href: '/technology', label: 'Technology' },
    { href: '/coming-soon', label: 'Future Plans', isSpecial: true },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b',
                scrolled ? 'bg-background/80 border-border py-3 shadow-lg' : 'bg-transparent border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-glow">
                        <span className="text-white font-bold text-xl font-mono">IFA</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight hidden sm:block">
                        Insight Fusion <span className="text-primary">Analytics</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary relative group',
                                link.isSpecial ? 'text-secondary font-semibold' : 'text-muted-foreground'
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Link href="/book-demo">
                        <Button variant="glow" size="sm">
                            Book Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-end pb-2">
                                <ThemeToggle />
                            </div>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'text-lg font-medium p-2 rounded-md hover:bg-foreground/5 transition-colors',
                                        link.isSpecial ? 'text-secondary' : 'text-foreground'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/book-demo" className="w-full mt-4" onClick={() => setIsOpen(false)}>
                                <Button className="w-full" variant="primary">
                                    Book Free Demo Call
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
