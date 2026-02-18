'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Zap, Coins, PieChart, BrainCircuit, Code2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Visual Background Components ---

const OptionsVisual = () => (
    <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            {/* Payoff Diagram Style Lines */}
            <path d="M0,150 L100,150 L200,50 L300,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <path d="M0,180 L100,180 L200,80 L300,80" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary opacity-50 block" strokeDasharray="5,5" />
            <circle cx="100" cy="150" r="4" className="fill-primary" />
            <circle cx="200" cy="50" r="4" className="fill-primary" />
            <defs>
                <linearGradient id="grid-fade-options" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-fade-options)" />
        </svg>
    </div>
);

const HFTVisual = () => (
    <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-70 transition-opacity">
        <div className="flex items-center justify-center h-full gap-1">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 bg-secondary rounded-full"
                    animate={{
                        height: [20, 60, 20],
                        opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    </div>
);

const CryptoVisual = () => (
    <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-80 transition-opacity overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/40 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-secondary/40 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full animate-pulse" />
    </div>
);

const HedgeFundVisual = () => (
    <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-80 transition-opacity bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent">
        <svg className="w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L20,80 L40,85 L60,50 L80,60 L100,20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            <path d="M0,100 L20,90 L40,95 L60,70 L80,75 L100,40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
        </svg>
    </div>
);

const MLVisual = () => (
    <div className="absolute inset-0 z-0 opacity-55 group-hover:opacity-75 transition-opacity">
        <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500/80" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500/80" />

            {/* Neural Nodes */}
            <circle cx="100" cy="60" r="3" className="fill-white animate-pulse" />
            <circle cx="140" cy="100" r="3" className="fill-white animate-pulse delay-75" />
            <circle cx="100" cy="140" r="3" className="fill-white animate-pulse delay-150" />
            <circle cx="60" cy="100" r="3" className="fill-white animate-pulse delay-300" />

            <line x1="100" y1="60" x2="140" y2="100" stroke="currentColor" className="text-white/70" />
            <line x1="140" y1="100" x2="100" y2="140" stroke="currentColor" className="text-white/70" />
            <line x1="100" y1="140" x2="60" y2="100" stroke="currentColor" className="text-white/70" />
            <line x1="60" y1="100" x2="100" y2="60" stroke="currentColor" className="text-white/70" />
        </svg>
    </div>
);

const CodeVisual = () => (
    <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-65 flex flex-col justify-center px-8 font-mono text-[10px] leading-3 text-green-500 overflow-hidden perspective-1000">
        <div className="transform rotate-12 scale-110">
            {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="whitespace-nowrap overflow-hidden">
                    {`01001010 110101 00101 101010 111000 1010101 0001`}
                </div>
            ))}
        </div>
    </div>
);

interface BentoItemProps {
    title: string;
    category: string;
    metric: string;
    metricLabel: string;
    icon: React.ElementType;
    className?: string;
    delay: number;
    VisualComponent?: React.ComponentType<unknown>;
    details?: string;
}

const BentoItem = ({ title, category, metric, metricLabel, icon: Icon, className, delay, VisualComponent, details }: BentoItemProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
            "group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
            className
        )}
    >
        {/* Dynamic Background Visual */}
        {VisualComponent && <VisualComponent />}

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-0 pointer-events-none" />

        <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-20">
            <Link href="/coming-soon">
                <ArrowUpRight className="text-white w-5 h-5 cursor-pointer" />
            </Link>
        </div>

        <div className="relative z-10 mt-auto">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary border border-white/5 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <Icon size={24} />
            </div>

            <div className="space-y-1 mb-6">
                <p className="text-xs font-bold tracking-wider text-secondary uppercase px-2 py-1 rounded-md bg-secondary/10 inline-block mb-2">
                    {category}
                </p>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                    {title}
                </h3>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between relative">
                <div>
                    <span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {metric}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono mt-1 block">
                        {metricLabel}
                    </span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-right relative group/details">
                    <span className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-help block">
                        More Details
                    </span>

                    {/* Tooltip Box */}
                    <div className="absolute bottom-full right-0 mb-3 w-64 p-4 rounded-xl bg-zinc-900 border border-white/10 shadow-xl opacity-0 translate-y-2 group-hover/details:opacity-100 group-hover/details:translate-y-0 transition-all duration-300 z-50 pointer-events-none group-hover/details:pointer-events-auto">
                        <div className="text-xs text-gray-300 leading-relaxed">
                            {details || "Detailed case study analysis available shortly. Contact us for full performance reports."}
                        </div>
                        <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-zinc-900 border-b border-r border-white/10 rotate-45 transform"></div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export function Portfolio() {
    return (
        <section id="work" className="py-32 bg-background relative">
            {/* Section Background Decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <span className="text-secondary">Case Studies</span></h2>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Real-world results from our 74-Agent AI System.
                        </p>
                    </div>
                    {/* View All Projects button removed as requested */}
                </motion.div>

                {/* Grid Layout: 3 Columns on Large Screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">

                    {/* Item 1: Options (Retail) */}
                    <BentoItem
                        title="Automated Options Income"
                        category="Retail Strategy"
                        metric="+15 Hrs"
                        metricLabel="Time Recovered / Week"
                        icon={Clock}
                        className="lg:col-span-1"
                        VisualComponent={OptionsVisual}
                        delay={0}
                        details="Automates delta-neutral iron condors on SPX. Includes volatility skew analysis and auto-hedging against tail risk events."
                    />

                    {/* Item 2: HFT (Prop Trading) - Wide */}
                    <BentoItem
                        title="High-Frequency Intraday"
                        category="Proprietary Trading"
                        metric="<300ms"
                        metricLabel="Execution Latency"
                        icon={Zap}
                        className="lg:col-span-2"
                        VisualComponent={HFTVisual}
                        delay={0.1}
                        details="FPGA-accelerated market making system for futures markets. Captures spread inefficiencies with sub-millisecond tick-to-trade latency."
                    />

                    {/* Item 3: Crypto Perpetuals Arbitrage (Fintech) - Wide */}
                    <BentoItem
                        title="Crypto Perpetuals Arbitrage"
                        category="FinTech Startup"
                        metric="$12M+"
                        metricLabel="AUM Managed"
                        icon={Coins}
                        className="lg:col-span-2"
                        VisualComponent={CryptoVisual}
                        delay={0.2}
                        details="Market-neutral funding rate arbitrage across decentralized and centralized exchanges. Zero-directional risk with automated rebalancing."
                    />

                    {/* Item 4: Portfolio Opt (Hedge Fund) */}
                    <BentoItem
                        title="Multi-Asset Optimization"
                        category="Hedge Fund ($450M)"
                        metric="0.2%"
                        metricLabel="Max Drift vs Internal"
                        icon={PieChart}
                        className="lg:col-span-1"
                        VisualComponent={HedgeFundVisual}
                        delay={0.3}
                        details="Risk parity allocation engine using convex optimization. Dynamically adjusts weights based on regime detection and correlation shifts."
                    />

                    {/* Item 5: ML Momentum (Quant Research) */}
                    <BentoItem
                        title="ML Momentum Strategy"
                        category="Quant Research"
                        metric="1.67"
                        metricLabel="Sharpe Ratio (Test)"
                        icon={BrainCircuit}
                        className="lg:col-span-1"
                        VisualComponent={MLVisual}
                        delay={0.4}
                        details="Deep learning model (LSTM) identifying non-linear momentum patterns in equities. Filters false breakouts using volume footprint analysis."
                    />

                    {/* Item 6: Reverse Engineering */}
                    <BentoItem
                        title="Indicator Reverse Eng."
                        category="Technical Analysis"
                        metric="98%"
                        metricLabel="Formula Match Accuracy"
                        icon={Code2}
                        className="lg:col-span-1"
                        VisualComponent={CodeVisual}
                        delay={0.5}
                        details="Decompiles proprietary TradingView scripts into pure Python logic. Validated against original signals with 98% tick-level accuracy."
                    />
                </div>
            </div>
        </section>
    );
}
