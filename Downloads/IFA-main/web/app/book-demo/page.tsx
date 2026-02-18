import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, Video } from 'lucide-react';
import { DemoScheduler } from '@/components/DemoScheduler';

export default function BookDemoPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            <div className="flex-grow container mx-auto px-4 pt-32 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-mono mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Schedule Your Session
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Strategy Call</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Discover how Insight Fusion Analytics can transform your operations with our First Principle approach to automation and intelligence.
                        </p>
                    </div>

                    {/* Booking Container */}
                    <div className="grid md:grid-cols-5 gap-8 bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">

                        {/* Left: Info Sidebar */}
                        <div className="md:col-span-2 bg-foreground/5 p-8 space-y-8">
                            <h3 className="text-xl font-semibold text-foreground">What to expect</h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="bg-primary/20 p-2 rounded-lg h-fit text-primary">
                                        <Video size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground text-sm">30-Minute Consultation</h4>
                                        <p className="text-xs text-muted-foreground mt-1">One-on-one session with a senior strategy consultant.</p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <div className="bg-secondary/20 p-2 rounded-lg h-fit text-secondary">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground text-sm">Tailored Platform Demo</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Live walkthrough of our capabilities relevant to your sector.</p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <div className="bg-orange-500/20 p-2 rounded-lg h-fit text-orange-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground text-sm">Custom Implementation Plan</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Preliminary roadmap for automating your specific workflow.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-8 border-t border-border">
                                <p className="text-xs text-muted-foreground italic">
                                    &quot;The strategy call clarified exactly how we could reduce our manual data processing by 70% within the first month.&quot;
                                </p>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                                    <span className="text-xs font-semibold text-foreground">CTO, FinTech Startup</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Interactive Calendar */}
                        <div className="md:col-span-3 min-h-[500px] bg-card/50">
                            <DemoScheduler />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
