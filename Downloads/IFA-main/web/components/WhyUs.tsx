'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ShieldCheck, ScanSearch, Globe, FileCode2 } from 'lucide-react';
import { MouseEvent } from 'react';

const capabilities = [
    {
        icon: ScanSearch,
        title: 'Reverse Engineering',
        description: 'Unique capability to extract logic from "black-box" indicators using OCR on chart screenshots.',
        color: 'rose',
        details: 'We can deconstruct any TradingView script or protected indicator. Our OCR technology and logic analysis reconstructs the source code with high fidelity.'
    },
    {
        icon: Globe,
        title: 'Universal Broker Support',
        description: 'Native connectivity to Zerodha, Fyers, IBKR, Binance, and 500+ MT4/MT5 brokers via bridge.',
        color: 'blue',
        details: 'Connect seamlessly to any major broker. Our bridge allows you to execute trades on MT4/MT5, Interactive Brokers, and crypto exchanges from a single interface.'
    },
    {
        icon: ShieldCheck,
        title: 'Institutional Standards',
        description: 'Rigorous bias detection (look-ahead, survivorship), transaction cost realism, and audit trails.',
        color: 'emerald',
        details: 'We apply rigorous backtesting protocols to eliminate overfitting. Every strategy is stress-tested against historical black swan events and variable liquidity conditions.'
    },
    {
        icon: FileCode2,
        title: 'Zero-Coding Automation',
        description: 'Our 186-question USDF intake form captures every nuance without you writing a single line of code.',
        color: 'violet',
        details: 'Turn your trading ideas into automated systems without coding. Our intuitive questionnaire captures your entry, exit, and risk management rules.'
    }
];

interface CardItem {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    details: string;
}

function Card({ item }: { item: CardItem }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative h-full bg-card/80 border border-border rounded-3xl overflow-hidden transition-colors hover:bg-card"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.08),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full p-8 flex flex-col z-10">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-400 group-hover:scale-110 group-hover:bg-${item.color}-500/20 transition-all duration-300 ring-1 ring-border`}>
                    <item.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">
                    {item.description}
                </p>

                <div className={`pt-6 border-t border-border flex items-center justify-between text-${item.color}-400 text-xs font-mono font-medium tracking-wide uppercase opacity-70 group-hover:opacity-100 transition-opacity relative`}>
                    <div className="flex items-center gap-2">
                        <span>Learn More</span> <div className="h-px w-6 bg-current" />
                    </div>

                    {/* Tooltip Hover Area */}
                    <div className="absolute inset-x-0 bottom-0 top-0 cursor-help group/tooltip">
                        {/* Tooltip Box */}
                        <div className="absolute bottom-full left-0 mb-3 w-64 p-4 rounded-xl bg-card border border-border shadow-xl opacity-0 translate-y-2 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 transition-all duration-300 z-50 pointer-events-none group-hover/tooltip:pointer-events-auto">
                            <div className="text-xs text-muted-foreground leading-relaxed normal-case tracking-normal">
                                {item.details}
                            </div>
                            <div className="absolute bottom-[-6px] left-8 w-3 h-3 bg-card border-b border-r border-border rotate-45 transform"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Border Gradient on Hover */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-border group-hover:ring-foreground/20 transition-all duration-500" />
        </div>
    );
}

export function WhyUs() {
    return (
        <section id="why-us" className="py-32 relative bg-background overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-border text-muted-foreground bg-foreground/5 text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
                        Competitive Advantages
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                        Why We Lead the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Market</span>.
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We deliver what others can&apos;t: specialized handling of complex instruments, reverse engineering of black-box indicators, and institutional-grade validation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <Card item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
