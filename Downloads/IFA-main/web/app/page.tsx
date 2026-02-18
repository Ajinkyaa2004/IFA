import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LiveTicker } from '@/components/LiveTicker';
import { About } from '@/components/About';
import { Philosophy } from '@/components/Philosophy';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { WhyUs } from '@/components/WhyUs';
import { Team } from '@/components/Team';
import { FutureTeaser } from '@/components/FutureTeaser';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow delay-2000" />
      </div>

      <Navbar />
      <LiveTicker />

      <div className="relative z-10 space-y-0">
        <Hero />
        <About />
        <Philosophy />
        <Process />
        <Portfolio />
        <WhyUs />
        <Team />
        <FutureTeaser />
      </div>

      <Footer />
    </main>
  );
}
