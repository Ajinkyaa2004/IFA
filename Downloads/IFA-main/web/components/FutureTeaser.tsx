'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, X, Brain, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Agent Data Categories
const agentCategories = [
    {
        title: "Pipeline Agents (U1-U27)",
        description: "Zero-Coding Workflow Automation",
        icon: <Brain className="w-5 h-5 text-purple-400" />,
        agents: [
            { id: "U1", name: "Compiler Agent", role: "Validates completeness & logic" },
            { id: "U2", name: "Semantic Interpreter", role: "Resolves ambiguities & infers defaults" },
            { id: "U3", name: "Communication Agent", role: "Client interface & quotes" },
            { id: "U4", name: "Pricing Agent", role: "Generates custom quotes & timelines" },
            { id: "U5", name: "Data Resolver", role: "Multi-source data orchestration" },
            { id: "U7", name: "Engine Router", role: "Selects optimal backtesting approach" },
            { id: "U8", name: "Code Generator", role: "Multi-platform code synthesis" },
            { id: "U10-13", name: "Specialized Engines", role: "Options, Crypto, Tax modeling" },
            { id: "U14", name: "Platform Deployment", role: "Packages code for target environment" },
            { id: "U18", name: "Revision Handler", role: "Processes modification requests" },
            { id: "U19", name: "Result Auditor", role: "Checks for bias & overfitting" },
            { id: "U21", name: "Acceptance Testing", role: "Generates validation tests" },
            { id: "U24", name: "Broker Orchestrator", role: "Handles live execution & APIs" },
        ]
    },
    {
        title: "Technical Agents (T1-T47)",
        description: "Core Infrastructure & Intelligence",
        icon: <Cpu className="w-5 h-5 text-blue-400" />,
        agents: [
            { id: "T-Data", name: "Data Infrastructure", role: "Tick-level storage & ingestion" },
            { id: "T-Tech", name: "Technical Analysis", role: "100+ indicators & pattern recognition" },
            { id: "T-Eval", name: "Evaluation & Analytics", role: "Risk analysis & drawdown modeling" },
            { id: "T23-28", name: "Backtesting Engines", role: "Vectorized, Event-driven, Monte Carlo" },
            { id: "T-Exec", name: "Execution Infra", role: "Order management & latency monitoring" },
            { id: "T-ML", name: "ML/AI Pipeline", role: "Feature engineering & model training" },
            { id: "T-Sent", name: "Sentiment & Alt Data", role: "News, social media & options flow" },
            { id: "T-Infra", name: "System Monitor", role: "Database management & alerting" },
        ]
    }
];

export function FutureTeaser() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 relative overflow-hidden bg-center bg-cover bg-no-repeat bg-background">
            {/* Light texture: subtle grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                      linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                }}
                aria-hidden
            />
            {/* Minimal robot/AI accents: very faint bot silhouettes */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <Bot className="absolute w-[280px] h-[280px] text-foreground opacity-[0.04] -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/2" strokeWidth={0.5} />
                <Bot className="absolute w-[200px] h-[200px] text-foreground opacity-[0.03] translate-x-1/2 -translate-y-1/2 right-1/4 top-1/2" strokeWidth={0.5} />
                <Cpu className="absolute w-[120px] h-[120px] text-primary opacity-[0.05] top-1/4 right-1/3" strokeWidth={0.5} />
                <Brain className="absolute w-[100px] h-[100px] text-secondary opacity-[0.05] bottom-1/4 left-1/3" strokeWidth={0.5} />
            </div>
            {/* Noise texture */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" aria-hidden />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary mb-8 text-sm font-medium"
                >
                    <Sparkles className="w-4 h-4" />
                    The Next Evolution
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    74 <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">Agents</span>.
                    <br />
                    Infinite Possibilities.
                </motion.h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    We are building a fully autonomous, agent-driven ecosystem.
                    From strategy generation to execution, handled entirely by AI.
                </p>

                <Button
                    variant="glow"
                    size="lg"
                    className="rounded-full px-10 py-6 text-lg group"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Bot className="mr-2 group-hover:animate-bounce" />
                    Explore The Future
                </Button>
            </div>

            {/* Agents Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-card border border-border rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-border flex justify-between items-center bg-foreground/5">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                        <Bot className="text-primary" /> The 74-Agent System
                                    </h3>
                                    <p className="text-muted-foreground text-sm">Autonomous Algorithmic Trading Pipeline</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-foreground/10 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto p-6 grid md:grid-cols-2 gap-8 custom-scrollbar">
                                {agentCategories.map((category, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-foreground/5 border border-border">
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-foreground">{category.title}</h4>
                                                <p className="text-xs text-muted-foreground">{category.description}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            {category.agents.map((agent, agentIdx) => (
                                                <div
                                                    key={agentIdx}
                                                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-foreground/5 border border-transparent hover:border-border transition-all"
                                                >
                                                    <span className="text-xs font-mono font-bold text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded mt-0.5">
                                                        {agent.id}
                                                    </span>
                                                    <div>
                                                        <h5 className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                                            {agent.name}
                                                        </h5>
                                                        <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                                            {agent.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 border-t border-border bg-foreground/5 text-center text-xs text-muted-foreground">
                                These agents work in harmony to deliver enterprise-grade solutions.
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
