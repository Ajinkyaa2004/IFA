'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bot, LineChart, Cpu, Globe, Trophy, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TypewriterEffect } from '@/components/ui/TypewriterEffect';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-6 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border text-sm text-secondary font-mono mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        IFA 2.0: The Future of Automation
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                        The First Principle <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary typing-cursor">
                            Company
                        </span>
                    </h1>

                    <div className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed h-[60px] sm:h-auto">
                        Redefining intelligence across <br className="hidden sm:block" />
                        <TypewriterEffect
                            words={[
                                { text: "Stock Markets.", className: "text-foreground font-semibold" },
                                { text: "Business Automation.", className: "text-foreground font-semibold" },
                                { text: "Algorithmic Trading.", className: "text-foreground font-semibold" },
                                { text: "Data Analytics.", className: "text-foreground font-semibold" }
                            ]}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <Link href="/book-demo">
                            <Button variant="glow" size="lg" className="rounded-full px-8 w-full sm:w-auto">
                                Book Strategy Call
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 border-border hover:bg-foreground/10 hover:border-foreground w-full sm:w-auto"
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Our Vision
                        </Button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-sm text-muted-foreground border-t border-border">
                        <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                            <div>
                                <p className="text-foreground font-bold text-lg">50+</p>
                                <p className="text-xs">Strategies</p>
                            </div>
                            <div>
                                <p className="text-foreground font-bold text-lg">95%</p>
                                <p className="text-xs">Accuracy</p>
                            </div>
                            <div>
                                <p className="text-foreground font-bold text-lg">24/7</p>
                                <p className="text-xs">Automation</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - 3D Floating Widgets (Multi-Domain) */}
                <div className="relative h-[600px] w-full hidden lg:block perspective-1000">

                    {/* Main Dashboard Card (Generic Intelligence) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0, y: [0, -10, 0] }}
                        transition={{
                            duration: 0.8,
                            y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                        }}
                        className="absolute top-10 left-10 right-10 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl shadow-primary/20 z-20 overflow-hidden"
                    >
                        {/* Animated Background Grid */}
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />

                        <div className="relative z-10 flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <Bot className="text-primary w-5 h-5" />
                                <span className="font-bold text-foreground">IFA Core Intelligence</span>
                            </div>
                            <div className="text-xs text-green-400 font-mono animate-pulse">● SYSTEM ACTIVE</div>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
                            {/* Box 1: Stocks */}
                            <div className="p-3 rounded-lg bg-foreground/5 border border-border text-center">
                                <LineChart className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                                <div className="text-[10px] text-muted-foreground">Market Alpha</div>
                                <div className="text-sm font-bold text-blue-400">+12.5%</div>
                            </div>
                            {/* Box 2: Automation */}
                            <div className="p-3 rounded-lg bg-foreground/5 border border-border text-center">
                                <Cpu className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                                <div className="text-[10px] text-muted-foreground">Efficiency</div>
                                <div className="text-sm font-bold text-purple-400">10x Speed</div>
                            </div>
                        </div>

                        {/* Dynamic Visualization */}
                        <div className="relative z-10 h-32 w-full bg-gradient-to-t from-primary/10 to-transparent rounded-lg border border-border p-4 flex items-center justify-center">
                            <Globe className="w-16 h-16 text-primary/20 animate-spin-slow" />
                            <div className="absolute font-mono text-xs text-center space-y-1">
                                <p className="text-foreground">Analyzing Global Data...</p>
                                <p className="text-muted-foreground">Processing 1.5M Data Points/sec</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Widget 1 - Market Analytics */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
                        transition={{
                            duration: 0.8, delay: 0.2,
                            y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }
                        }}
                        className="absolute -right-4 top-1/2 bg-card/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl z-30 w-52"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Activity className="text-blue-400 w-5 h-5" />
                            <span className="font-bold text-sm">Market Signals</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">Buy Signal</span>
                                <span className="text-green-400">Strong</span>
                            </div>
                            <div className="w-full bg-foreground/10 h-1 rounded-full overflow-hidden">
                                <div className="h-full bg-green-400 w-[80%]" />
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">Volatility</span>
                                <span className="text-yellow-400">Medium</span>
                            </div>
                            <div className="w-full bg-foreground/10 h-1 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 w-[45%]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Widget 2 - Business Logic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
                        transition={{
                            duration: 0.8, delay: 0.4,
                            y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }
                        }}
                        className="absolute -left-8 bottom-32 bg-card/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl z-10 w-60"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Bot className="text-purple-400 w-5 h-5" />
                            <span className="font-bold text-sm">Workflow Automation</span>
                        </div>
                        <div className="space-y-1 font-mono text-[10px] text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span> Order Processed
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span> Inventory Updated
                            </div>
                            <div className="flex items-center gap-2 animate-pulse">
                                <span className="text-yellow-400">➜</span> Forecasting Demand...
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
