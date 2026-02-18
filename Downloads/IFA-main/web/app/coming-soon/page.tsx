'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
            {/* Background Matrix Effect (CSS only for now) */}
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] whitespace-pre-wrap animate-pulse overflow-hidden pointer-events-none">
                {Array(500).fill("0 1 ").join("")}
            </div>

            <div className="container mx-auto px-4 py-8 relative z-20 flex-1 flex flex-col justify-center items-center text-center">
                <Link
                    href="/"
                    className="absolute top-8 left-8 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="mr-2" size={20} /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-secondary/50 text-secondary bg-secondary/10 text-sm font-medium mb-6">
                        Coming Q4 2026
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
                        Project <span className="text-secondary">74</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                        The world&apos;s first fully autonomous, agent-driven trading ecosystem.
                        <strong className="block mt-4 text-foreground text-2xl">74 Exclusive AI Agents + Expert Human Monitoring</strong>
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10 text-sm text-muted-foreground bg-foreground/5 p-6 rounded-xl border border-border">
                        <div className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <p><strong>Agent-Driven Architecture:</strong> Specialized agents for Sentiment, Technicals, Fundamentals, Risk, and Execution working in harmony.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-secondary mt-1">●</span>
                            <p><strong>Expert Oversight:</strong> Real-time monitoring and strategic adjustments by seasoned market professionals to ensure safety.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-md space-y-4"
                >
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email for early access"
                            className="flex-1 bg-foreground/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-mono text-foreground placeholder:text-muted-foreground"
                        />
                        <Button variant="glow">
                            Join <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Join 2,500+ traders on the waitlist. Zero spam.
                    </p>
                </motion.div>
            </div>

            {/* Footer minimal */}
            <footer className="w-full py-6 border-t border-border text-center text-xs text-muted-foreground relative z-20">
                &copy; 2026 Insight Fusion Analytics. Development in progress.
            </footer>
        </div>
    );
}
