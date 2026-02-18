'use client';

import { motion } from 'framer-motion';

const tickerItems = [
    // Stock
    { label: 'NIFTY 50', value: '24,352.40', change: '+0.45%', color: 'text-green-400' },

    // Sports
    { label: 'EPL: LIV vs MCI', value: 'LIV Win Probability: 42%', change: '↑', color: 'text-orange-400' },
    { label: 'NBA: LAL vs GSW', value: 'Over 225.5', change: 'Hit Rate 85%', color: 'text-orange-400' },

    // Business Automation
    { label: 'TASKS AUTOMATED', value: '1,245 Today', change: '+12%', color: 'text-purple-400' },
    { label: 'DATA PROCESSED', value: '45TB', change: 'Live', color: 'text-blue-400' },

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
