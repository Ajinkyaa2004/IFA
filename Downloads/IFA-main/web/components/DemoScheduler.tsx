'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/components/ui/Button';

const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export function DemoScheduler() {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isBooked, setIsBooked] = useState(false);

    // New state for form details
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [step, setStep] = useState<'calendar' | 'details'>('calendar');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mock calendar generation for current month
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handleBooking = async () => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/book-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: selectedDate,
                    time: selectedTime,
                    name,
                    email,
                    company
                }),
            });

            if (response.ok) {
                setIsBooked(true);
            } else {
                alert('Failed to book. Please try again.');
            }
        } catch (error) {
            console.error('Booking failed:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isBooked) {
        return (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 bg-black animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                <p className="text-muted-foreground mb-6 max-w-xs">
                    We&apos;ve sent a calendar invitation to <span className="text-white font-semibold">{email}</span>. We look forward to speaking with you on <span className="text-white font-semibold">March {selectedDate} at {selectedTime}</span>.
                </p>
                <Button variant="outline" onClick={() => { setIsBooked(false); setStep('calendar'); setSelectedDate(null); setSelectedTime(null); setName(''); setEmail(''); setCompany(''); }}>
                    Book Another Call
                </Button>
            </div>
        );
    }

    if (step === 'details') {
        return (
            <div className="flex flex-col h-full bg-black p-6 md:p-8 animate-in fade-in slide-in-from-right-8 duration-300">
                <button
                    onClick={() => setStep('calendar')}
                    className="flex items-center text-xs text-muted-foreground hover:text-white mb-6 transition-colors"
                >
                    <ChevronLeft size={14} className="mr-1" /> Back to Calendar
                </button>

                <h3 className="text-xl font-bold text-white mb-1">Enter Your Details</h3>
                <p className="text-xs text-muted-foreground mb-6">Finalize your booking for March {selectedDate} at {selectedTime}</p>

                <div className="space-y-4 max-w-sm mx-auto w-full">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="john@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Company (Optional)</label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="Acme Inc."
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>

                    <Button
                        variant="glow"
                        className="w-full mt-6"
                        disabled={!name || !email || isSubmitting}
                        onClick={handleBooking}
                    >
                        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-black p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-1">Select a Date & Time</h3>
            <p className="text-xs text-muted-foreground mb-6">Duration: 30 min</p>

            <div className="flex flex-col md:flex-row gap-8 h-full">
                {/* Calendar View */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-white">March 2026</span>
                        <div className="flex gap-1">
                            <button className="p-1 hover:bg-white/10 rounded-full text-muted-foreground"><ChevronLeft size={16} /></button>
                            <button className="p-1 hover:bg-white/10 rounded-full text-muted-foreground"><ChevronRight size={16} /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                        {weekDays.map(d => (
                            <div key={d} className="text-[10px] text-muted-foreground font-medium py-1">{d}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {/* Empty slots for start of month padding (mock) */}
                        <div className="aspect-square" />
                        <div className="aspect-square" />

                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                                className={cn(
                                    "aspect-square rounded-md text-sm flex items-center justify-center transition-all hover:bg-white/10",
                                    selectedDate === day
                                        ? "bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary"
                                        : "text-gray-300",
                                    // Disable weekends mock logic
                                    (day + 2) % 7 === 0 || (day + 2) % 7 === 6 ? "opacity-20 pointer-events-none" : ""
                                )}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time Slots (Visible on Date Select) */}
                <div className="w-full md:w-48 border-l border-white/10 pl-0 md:pl-6 md:pt-0 pt-6 border-t md:border-t-0">
                    <div className="h-full flex flex-col">
                        <h4 className="text-sm font-medium text-white mb-4">
                            {selectedDate ? `Available Times` : 'Select a date'}
                        </h4>

                        <div className="flex-1 overflow-y-auto max-h-[300px] space-y-2 pr-2 custom-scrollbar">
                            {!selectedDate && (
                                <div className="text-xs text-muted-foreground flex flex-col items-center justify-center h-40">
                                    <Clock className="mb-2 opacity-50" size={24} />
                                    <span className="text-center">Please choose a day to see availability</span>
                                </div>
                            )}

                            {selectedDate && timeSlots.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={cn(
                                        "w-full py-2 px-3 rounded-md text-xs border transition-all text-center",
                                        selectedTime === time
                                            ? "bg-white text-black border-white font-bold"
                                            : "border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/5"
                                    )}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 mt-auto">
                            <Button
                                variant="glow"
                                size="sm"
                                className="w-full"
                                disabled={!selectedDate || !selectedTime}
                                onClick={() => setStep('details')}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
