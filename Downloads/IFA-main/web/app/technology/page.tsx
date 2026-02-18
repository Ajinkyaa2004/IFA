'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Globe, Layers, Server, Lock, Brain, TrendingUp, CheckCircle, Activity, ChevronDown, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// --- Visually Rich Components ---

interface Particle {
    initialX: string;
    initialY: string;
    scale: number;
    animateY: string;
    duration: number;
    delay: number;
    width: string;
    height: string;
}

const BackgroundParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // eslint-disable-next-line
        setParticles(
            [...Array(20)].map(() => ({
                initialX: Math.random() * 100 + "%",
                initialY: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                animateY: Math.random() * -100 + "%",
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
                width: Math.random() * 300 + 50 + "px",
                height: Math.random() * 300 + 50 + "px",
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-primary/10 rounded-full"
                    initial={{
                        x: p.initialX,
                        y: p.initialY,
                        scale: p.scale,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, p.animateY],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                    style={{
                        width: p.width,
                        height: p.height,
                        filter: "blur(40px)"
                    }}
                />
            ))}
        </div>
    );
};

interface TechCardProps {
    title: string;
    description: string;
    items: string[];
    icon: React.ElementType;
    delay: number;
}

const TechCard = ({ title, description, items, icon: Icon, delay }: TechCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated Grid on Hover */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(100px_100px_at_50%_50%,black,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-black/50">
                    <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all">{title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {items.map((item: string, idx: number) => (
                        <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-foreground/5 border border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-primary/90 group-hover:bg-primary/5 transition-all"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

interface PipelineStepProps {
    number: string;
    title: string;
    subtitle: string;
    isLast?: boolean;
}

const PipelineStep = ({ number, title, subtitle, isLast }: PipelineStepProps) => (
    <div className="flex flex-col items-center text-center relative z-10 group">
        <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center text-2xl font-bold text-foreground mb-6 relative z-10 shadow-[0_0_20px_rgba(124,58,237,0.1)] group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-all duration-300">
            <span className="sr-only">Step </span>{number}
            {/* Inner Pulse */}
            <div className="absolute inset-2 rounded-full border border-border group-hover:animate-ping opacity-20" />
        </div>
        {!isLast && (
            <div className="absolute top-10 left-1/2 w-full h-0.5 bg-foreground/5 -z-0 hidden md:block transform translate-x-10">
                <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                />
            </div>
        )}
        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-muted-foreground max-w-[200px] leading-snug">{subtitle}</p>
    </div>
);

interface MetricCardProps {
    value: string;
    label: string;
    icon: React.ElementType;
    delay: number;
}

const MetricCard = ({ value, label, icon: Icon, delay }: MetricCardProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.4 }}
        className="flex flex-col items-center justify-center p-6 bg-foreground/5 border border-border rounded-2xl text-center hover:bg-foreground/10 transition-colors"
    >
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3 text-primary">
            <Icon size={20} />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
    </motion.div>
);

const TechnicalDeepDive = () => {
    const [isOpen, setIsOpen] = useState(false);

    const details = [
        { label: "Simulation Type", value: "Tick-level precision" },
        { label: "Robustness Testing", value: "Monte Carlo permutations" },
        { label: "Performance Metrics", value: "Sharpe, Sortino, Calmar" },
        { label: "Validation Method", value: "Walk-forward Analysis (WFA)" },
        { label: "Risk Modeling", value: "Dynamic Slippage & Commission" },
        { label: "Execution Speed", value: "< 50ms Latency" },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto mt-12 text-center">
            <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="group relative overflow-hidden rounded-full border-primary/30 hover:border-primary/60 transition-all"
            >
                <span className="flex items-center gap-2 relative z-10">
                    <ListChecks size={16} />
                    View Technical Details
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </span>
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 p-6 bg-card/60 border border-border rounded-2xl backdrop-blur-sm">
                            {details.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="text-left p-3 rounded-lg bg-foreground/5 border border-border"
                                >
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-sm font-semibold text-foreground/90">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function TechnologyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background relative overflow-hidden pt-20">
                <BackgroundParticles />
                {/* Background Effects */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                {/* Hero Section */}
                <section className="relative z-10 pt-20 pb-32 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-8 text-sm font-medium"
                    >
                        <Cpu className="w-4 h-4" />
                        Built for Institutional Scale
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Technology</span> Behind the Alpha.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Our proprietary 74-Agent System combines advanced LLMs with deterministic execution engines.
                        We leverage industry-standard infrastructure to ensure speed, reliability, and security.
                    </motion.p>

                    {/* Metrics Section: Proven at Scale */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-16">
                        <MetricCard value="52+" label="Projects Delivered" icon={CheckCircle} delay={0} />
                        <MetricCard value="74" label="AI Agents" icon={Brain} delay={0.1} />
                        <MetricCard value="10+" label="Trading Platforms" icon={Layers} delay={0.2} />
                        <MetricCard value="7+" label="Broker APIs" icon={Globe} delay={0.3} />
                        <MetricCard value="100%" label="Success Rate" icon={TrendingUp} delay={0.4} />
                        <MetricCard value="10Y+" label="Backtest Data" icon={Activity} delay={0.5} />
                    </div>

                    {/* Technical Deep Dive Toggle */}
                    <TechnicalDeepDive />
                </section>

                {/* Core Tech Grid */}
                <section className="relative z-10 pb-32 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* 1. AI & Automation */}
                        <TechCard
                            title="AI & Agentic Workflow"
                            description="Orchestrating 74 specialized agents for code generation, auditing, and optimization."
                            icon={Brain}
                            items={['Claude Opus 4', 'GPT-4o', 'n8n Workflow', 'LangChain']}
                            delay={0.1}
                        />

                        {/* 2. Data Infrastructure */}
                        <TechCard
                            title="Data Infrastructure"
                            description="High-throughput storage for tick-level data and real-time state management."
                            icon={Database}
                            items={['TimescaleDB', 'Redis', 'PostgreSQL', 'S3']}
                            delay={0.2}
                        />

                        {/* 3. Backtesting Engines */}
                        <TechCard
                            title="Backtesting Engines"
                            description="Professional-grade simulation environments with realistic slippage and cost modeling."
                            icon={Layers}
                            items={['vectorbt', 'backtrader', 'Zipline', 'Custom Event-Driven']}
                            delay={0.3}
                        />

                        {/* 4. Execution & Brokerage */}
                        <TechCard
                            title="Execution & Brokerage"
                            description="Low-latency connectivity to global markets via direct APIs and bridges."
                            icon={Globe}
                            items={['Zerodha Kite', 'Interactive Brokers', 'Binance API', 'MT4/5 Bridges']}
                            delay={0.4}
                        />

                        {/* 5. Machine Learning */}
                        <TechCard
                            title="Machine Learning"
                            description="Predictive modeling pipelines with rigorous walk-forward validation."
                            icon={Server}
                            items={['PyTorch', 'XGBoost', 'scikit-learn', 'ONNX']}
                            delay={0.5}
                        />

                        {/* 6. Security & DevOps */}
                        <TechCard
                            title="Security & Reliability"
                            description="Enterprise-grade security practices and containerized deployment."
                            icon={Lock}
                            items={['Docker', 'Kubernetes', 'AWS', 'E2E Encryption']}
                            delay={0.6}
                        />

                    </div>
                </section>

                {/* Pipeline Visualization */}
                <section className="relative z-10 py-24 bg-card/40 border-y border-border">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Pipeline Architecture</h2>
                            <p className="text-muted-foreground">From intake to production in 4 automated stages.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
                            <PipelineStep
                                number="01"
                                title="Intake & Design"
                                subtitle="USDF Parsing, Strategy Validation, Spec Generation"
                            />
                            <PipelineStep
                                number="02"
                                title="Code Synthesis"
                                subtitle="Multi-Agent Coding, Engine Routing, Syntax Checking"
                            />
                            <PipelineStep
                                number="03"
                                title="Rigorous Testing"
                                subtitle="Walk-Forward Optimization, Bias Detection, Stress Testing"
                            />
                            <PipelineStep
                                number="04"
                                title="Deployment"
                                subtitle="Broker Configuration, Live Monitoring, Alert Setup"
                                isLast
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative z-10 py-32 text-center container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Ready to leverage this stack?</h2>
                    <Link href="/book-demo">
                        <Button variant="glow" size="lg" className="px-12 py-6 text-lg rounded-full">
                            Book a Technical Demo
                        </Button>
                    </Link>
                </section>

            </main>
            <Footer />
        </>
    );
}

