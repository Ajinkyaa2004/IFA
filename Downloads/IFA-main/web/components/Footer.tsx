'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export function Footer() {
    return (
        <footer id="contact" className="border-t border-border bg-background/95 backdrop-blur-md pt-16 pb-8 relative z-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="h-8 w-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <span className="text-white font-bold text-sm font-mono">IFA</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight">
                                Insight Fusion <span className="text-primary">Analytics</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                            The First Principle Company. <br />
                            Enterprise-grade algorithmic trading solutions and advanced data analytics across industries.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.linkedin.com/company/insight-fusion-analytics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://x.com/fusion593151"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="mailto:insightfusionanalytics@gmail.com"
                                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">Algorithmic Trading</Link></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">Business Intelligence</Link></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/#process" className="hover:text-primary transition-colors">Our Process</Link></li>
                            <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/book-demo" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Newsletter</h4>
                        <p className="text-sm text-muted-foreground pb-2">
                            Stay updated with our latest insights and news.
                        </p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-foreground/5 border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors w-full"
                            />
                            <Button size="sm" className="w-full">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground gap-4">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" />
                        <span>Vile Parle, Mumbai, India</span>
                    </div>
                    <div className="text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} Insight Fusion Analytics. All rights reserved.</p>

                    </div>
                </div>
            </div>
        </footer>
    );
}
