'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Ellen Spano',
        role: 'Crypto Market Analyst',
        highlight: 'Long Advanced Machine Learning',
        content: "Insight Fusion's advanced algorithms and robust backtesting are top-notch. Their blend of high-frequency indicators and on-chain analytics has delivered returns well above my investment. The predictive models are precise, adapting to market changes seamlessly. I'm highly impressed and look forward to a long-term partnership!",
        stars: 5,
        initials: 'ES',
        color: 'bg-indigo-500'
    },
    {
        name: 'David Chen',
        role: 'Quantitative Strategist',
        highlight: 'Automated Risk Management',
        content: "The USDF system completely revolutionized how we define strategies. What used to take weeks of coding now takes minutes of simple English description. The execution speed and risk controls are enterprise-grade. A game changer for our fund.",
        stars: 5,
        initials: 'DC',
        color: 'bg-emerald-500'
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative bg-zinc-950/50">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-secondary font-mono mb-6">
                        <Quote className="w-4 h-4" />
                        Client Success
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Trusted by <span className="text-secondary">Elite Professionals</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See how top analysts and firms are leveraging our AI infrastructure.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-white/10 transition-colors" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${item.color}`}>
                                    {item.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">{item.role}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                {[...Array(item.stars)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-lg">★</span>
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed italic relative z-10">
                                &quot;{item.content}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
