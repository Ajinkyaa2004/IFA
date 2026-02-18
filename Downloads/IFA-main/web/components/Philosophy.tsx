'use client';

import { motion } from 'framer-motion';
import { Brain, Users, Rocket, Scale, Eye } from 'lucide-react';

const principles = [
    {
        icon: Scale,
        title: 'First Principles Thinking',
        description: 'We disassemble complex financial problems into their fundamental truths, avoiding "reasoning by analogy" to build truly novel solutions.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20'
    },
    {
        icon: Eye,
        title: 'Radical Transparency',
        description: 'No "Black Boxes". We deliver full source code and logic breakdowns. You own your IP, we just build the intelligence.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        border: 'border-emerald-400/20'
    },
    {
        icon: Users,
        title: 'Aligned Incentives',
        description: 'We are technology partners, not just vendors. Our zero-coding platform is designed to make you self-sufficient, not dependent.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/20'
    },
    {
        icon: Rocket,
        title: 'Speed as a Habit',
        description: 'In alpha generation, speed is currency. Our 74-Agent system reduces development cycles from months to days.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        border: 'border-orange-400/20'
    }
];

export function Philosophy() {
    return (
        <section id="philosophy" className="py-24 relative bg-background overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border text-sm text-muted-foreground font-mono mb-6 backdrop-blur-sm">
                        <Brain className="w-4 h-4" />
                        Our DNA
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">First Principles</span> Approach.
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We don&apos;t just write code. We deconstruct markets to their core mechanics
                        to build resilient, high-performance trading infrastructure.
                    </p>
                </motion.div>

                <div className="relative mt-16 max-w-5xl mx-auto">
                    {/* Glowing Connector Line */}
                    <div className="absolute top-12 left-0 right-0 h-px bg-foreground/10 -translate-y-1/2 hidden md:block">
                        <motion.div
                            animate={{
                                x: ["-100%", "100%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]"
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group cursor-default"
                            >
                                <div className="relative mb-6">
                                    <div className={`w-24 h-24 rounded-full bg-card border border-border flex items-center justify-center relative z-10 group-hover:border-foreground/30 transition-colors duration-300`}>
                                        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 ${principle.bg} transition-opacity duration-300 blur-md`} />
                                        <principle.icon className={`w-8 h-8 ${principle.color} transition-transform duration-300 group-hover:scale-110`} />
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className={`absolute inset-0 rounded-full ${principle.bg} opacity-0 group-hover:animate-ping`} />
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                                    {principle.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
