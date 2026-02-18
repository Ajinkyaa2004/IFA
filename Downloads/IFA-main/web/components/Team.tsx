'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
    {
        name: 'Anmol Pathak',
        role: 'Founder & CEO',
        linkedin: 'https://www.linkedin.com/in/anmol-pathak-260008185/',
    },
    {
        name: 'Susmita Mandal',
        role: 'Manager',
        linkedin: 'https://www.linkedin.com/in/susmita-mandal-9b5335243/',
    },
    {
        name: 'Rupesh Koppuravuri',
        role: 'Lead Data Analyst',
        linkedin: 'https://www.linkedin.com/in/rupesh-koppuravuri/',
    },
    {
        name: 'Ajinkya Dhumal',
        role: 'Full Stack Developer',
        linkedin: 'https://www.linkedin.com/in/ajinkya842004/',
    },
    {
        name: 'Yash Dhiver',
        role: 'Full Stack Developer',
        linkedin: 'https://www.linkedin.com/in/susmita-mandal-9b5335243/',
    },
];

export function Team() {
    return (
        <section id="team" className="py-24 relative overflow-hidden bg-dot-white/[0.2]">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-mono mb-6">
                        Our Visionaries
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Team <span className="text-primary">Behind AI </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collective of experts dedicated to redefining the future of analytics and automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 max-w-[1400px] mx-auto">
                    {teamMembers.map((member, index) => {
                        const initials = member.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')
                            .toUpperCase();

                        // Assign a subtle distinct color tint based on index for variety
                        const glowColors = [
                            'from-blue-500/20 to-purple-500/20',
                            'from-emerald-500/20 to-teal-500/20',
                            'from-orange-500/20 to-red-500/20',
                            'from-indigo-500/20 to-cyan-500/20',
                            'from-pink-500/20 to-rose-500/20'
                        ];

                        const borderColors = [
                            'group-hover:border-blue-500/50',
                            'group-hover:border-emerald-500/50',
                            'group-hover:border-orange-500/50',
                            'group-hover:border-indigo-500/50',
                            'group-hover:border-pink-500/50'
                        ];

                        const activeGlow = glowColors[index % glowColors.length];
                        const activeBorder = borderColors[index % borderColors.length];

                        return (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative w-full"
                            >
                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${activeGlow} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

                                <div className={`relative h-full bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 flex flex-col items-center group-hover:-translate-y-2 ${activeBorder}`}>
                                    {/* Top Accent Line */}
                                    <div className="absolute top-0 inset-x-4 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent group-hover:via-foreground/50 transition-all" />

                                    {/* Avatar */}
                                    <div className="w-20 h-20 mb-5 rounded-2xl bg-card border border-border flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-lg">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${activeGlow} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                                        <span className="text-xl font-bold text-foreground relative z-10">
                                            {initials}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <h3 className="text-lg font-bold text-foreground mb-1 text-center group-hover:text-foreground transition-colors duration-300">
                                        {member.name}
                                    </h3>

                                    <div className="h-px w-12 bg-foreground/10 my-3 group-hover:w-full group-hover:bg-foreground/20 transition-all duration-300" />

                                    <p className="text-xs text-muted-foreground font-medium mb-5 text-center uppercase tracking-wider group-hover:text-foreground/80 transition-colors">
                                        {member.role}
                                    </p>

                                    {/* Social */}
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto p-2 rounded-lg bg-foreground/10 text-muted-foreground hover:text-foreground hover:bg-foreground/20 transition-all duration-300 border border-border hover:border-foreground/20"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
