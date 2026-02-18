'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Code2, ShieldCheck, Rocket, RefreshCw, Clock } from 'lucide-react';

const phases = [
    {
        phase: '01',
        title: 'Intake & Validation',
        duration: '1-2 Days',
        icon: FileText,
        description: 'You complete the USDF form. Our U1 Compiler Agent validates logic, and U4 Pricing Agent generates a quoted timeline.',
        color: 'text-blue-400',
        glow: 'shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]',
        gradient: 'from-blue-500/20 to-transparent'
    },
    {
        phase: '02',
        title: 'AI Development',
        duration: '3-10 Days',
        icon: Code2,
        description: 'Our 74-Agent pipeline generates platform-native code. U8 Code Generator and T23 Backtesting Engines run thousands of scenarios.',
        color: 'text-purple-400',
        glow: 'shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)]',
        gradient: 'from-purple-500/20 to-transparent'
    },
    {
        phase: '03',
        title: 'Quality Assurance',
        duration: '1-2 Days',
        icon: ShieldCheck,
        description: 'Institutional-grade audit. U19 Auditor checks for look-ahead bias and overfitting. U21 generates client-runnable acceptance tests.',
        color: 'text-emerald-400',
        glow: 'shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]',
        gradient: 'from-emerald-500/20 to-transparent'
    },
    {
        phase: '04',
        title: 'Delivery & Deployment',
        duration: '1-2 Days',
        icon: Rocket,
        description: 'You receive production-ready code, documentation, and a validation report. Optional U24 Broker Integration for live trading.',
        color: 'text-orange-400',
        glow: 'shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)]',
        gradient: 'from-orange-500/20 to-transparent'
    },
    {
        phase: '05',
        title: 'Support & Revisions',
        duration: 'Ongoing',
        icon: RefreshCw,
        description: 'We ensure long-term stability. U18 Revision Handler manages updates, and we provide ongoing monitoring for live systems.',
        color: 'text-pink-400',
        glow: 'shadow-[0_0_30px_-5px_rgba(244,114,182,0.3)]',
        gradient: 'from-pink-500/20 to-transparent'
    }
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-secondary text-sm font-mono uppercase tracking-[0.2em] mb-4 block">The Pipeline</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
                        From Raw Idea to <span className="text-foreground">Alpha</span>.
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Central Spine */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
                        {/* Background Track */}
                        <div className="absolute inset-0 bg-foreground/5" />

                        {/* Filling Beam */}
                        <motion.div
                            style={{ height }}
                            className="w-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 relative overflow-visible"
                        >
                            {/* Leading Edge Glow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rounded-full blur-[2px] shadow-[0_0_10px_4px_rgba(168,85,247,0.6)]" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-primary rounded-full z-10" />
                        </motion.div>
                    </div>

                    <div className="space-y-16">
                        {phases.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 z-20 group hover:scale-110 transition-transform duration-300 hover:border-foreground/30">
                                    <item.icon className={`w-4 h-4 ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-40px)] ml-12 md:ml-0`}>
                                    <div className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-foreground/20 transition-all group relative overflow-hidden`}>

                                        {/* Subtle Gradient Splash */}
                                        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${item.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                        <div className="flex items-center justify-between mb-3 relative z-10">
                                            <span className={`text-4xl md:text-5xl font-bold opacity-10 ${item.color} absolute -top-3 md:-top-4 -left-2`}>
                                                {item.phase}
                                            </span>
                                            <div className="ml-auto flex items-center gap-1.5 text-[10px] font-mono uppercase text-muted-foreground border border-border px-2 py-1 rounded-full bg-foreground/10">
                                                <Clock className="w-3 h-3" />
                                                {item.duration}
                                            </div>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 relative z-10 pl-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10 pl-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden md:block w-[calc(50%-40px)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
