'use client';

import { motion } from 'framer-motion';

const tickerItems = [
    // Stock
    { label: 'NIFTY 50', value: '24,352.40', change: '+0.45%', color: 'text-green-400' },
    { label: 'SENSEX', value: '80,234.08', change: '+0.32%', color: 'text-green-400' },
    { label: 'NASDAQ', value: '18,972.42', change: '-0.12%', color: 'text-red-400' },

    // Business Automation
    { label: 'TASKS AUTOMATED', value: '1,245 Today', change: '+12%', color: 'text-purple-400' },
    { label: 'DATA PROCESSED', value: '45TB', change: 'Live', color: 'text-blue-400' },
    { label: 'STRATEGIES DEPLOYED', value: '127', change: '+8', color: 'text-emerald-400' },

    // System
    { label: 'SYSTEM STATUS', value: 'OPERATIONAL', change: '✓', color: 'text-secondary' },
    { label: 'ACTIVE AGENTS', value: '74', change: 'Online', color: 'text-foreground' },
];

export function LiveTicker() {
    return (
        <div className="w-full bg-background border-y border-border py-2 overflow-hidden sticky top-[72px] z-40 backdrop-blur-sm">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1500] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex gap-12 px-4"
                >
                    {/* Duplicate items for seamless loop */}
                    {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono border-r border-border pr-6">
                            <span className="text-muted-foreground font-bold">{item.label}</span>
                            <span className="text-foreground">{item.value}</span>
                            <span className={item.color}>{item.change}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
