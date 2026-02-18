'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Trophy, Cpu } from 'lucide-react';
import { TypewriterEffect } from '@/components/ui/TypewriterEffect';

export function About() {
    return (
        <section id="about" className="py-16 lg:py-24 relative overflow-hidden bg-dot-white/[0.2]">
            <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-mono mb-6">
                        <Target className="w-4 h-4" />
                        Who We Are
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Democratizing <span className="text-secondary">Intelligence</span> & Automation.
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Insight Fusion Analytics is an enterprise-grade <strong className="text-foreground">AI Automation & Data Science</strong> firm.
                        </p>
                        <p>
                            We specialize in <strong>Zero-Coding Solutions</strong> across three critical sectors:
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <TrendingUp className="text-green-400 w-5 h-5 flex-shrink-0" />
                                <span><strong className="text-foreground">Financial Markets:</strong> Algorithmic trading & risk modeling.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Cpu className="text-purple-400 w-5 h-5 flex-shrink-0" />
                                <span><strong className="text-foreground">Business Automation:</strong> End-to-end workflow optimization.</span>
                            </li>
                        </ul>

                        <p className="mt-4">
                            Our unique <strong>Universal Strategy Definition Form (USDF)</strong> allows clients to describe complex logic in plain English, which our AI pipeline then converts into production-grade systems.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Visual/Widget - Automation Flow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] lg:h-[500px] w-full bg-gradient-to-br from-card to-background rounded-3xl border border-border p-6 lg:p-8 flex flex-col justify-between overflow-hidden group hover:border-primary/50 transition-colors"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                    {/* Mock Chat/Input Interface */}
                    <div className="space-y-4 relative z-10 w-full max-w-sm mx-auto">
                        <div className="bg-foreground/5 rounded-lg p-3 text-xs text-muted-foreground border border-border self-end font-mono h-[80px]">
                            <span className="text-secondary mr-2">User:</span>
                            <TypewriterEffect
                                words={[{
                                    text: '"Build a system that buys stock when RSI < 30 AND sells when price crosses 200-day MA"',
                                    className: "text-foreground"
                                }]}
                            />
                        </div>

                        <div className="bg-primary/20 rounded-lg p-3 text-xs text-primary-foreground border border-primary/20 self-start animate-pulse">
                            <div className="flex items-center gap-2 mb-2 font-bold text-primary">
                                <Cpu className="w-3 h-3" /> AI Processor
                            </div>
                            Processing Request...
                            <div className="mt-2 space-y-1 text-[10px] font-mono text-green-400">
                                <p>{'>'} Analyzing Financial Module...</p>
                                <p>{'>'} Generating Strategy Code...</p>
                                <p>{'>'} Deployment Ready.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Metrics */}
                    <div className="grid grid-cols-2 gap-4 relative z-10 mt-8">
                        <div className="bg-foreground/5 p-4 rounded-xl text-center border border-border">
                            <div className="text-2xl font-bold text-foreground">0%</div>
                            <div className="text-xs text-muted-foreground">Coding Required</div>
                        </div>
                        <div className="bg-foreground/5 p-4 rounded-xl text-center border border-border">
                            <div className="text-2xl font-bold text-secondary">100%</div>
                            <div className="text-xs text-muted-foreground">Automated</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
