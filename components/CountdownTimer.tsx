'use client';
import { useEffect, useState } from 'react';

const TARGET = new Date('2026-05-30T00:00:00Z');

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Box({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-14 sm:w-24 sm:h-20 md:w-28 md:h-24 flex items-center justify-center rounded-xl bg-[#1e0d30] border border-[#F0C4B7]/20 shadow-lg shadow-[#F0C4B7]/5">
        <span suppressHydrationWarning={true} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-mono">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 67, hours: 7, minutes: 23, seconds: 45 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-5 md:gap-6 justify-center">
      <Box value={time.days} label="Days" />
      <Box value={time.hours} label="Hours" />
      <Box value={time.minutes} label="Minutes" />
      <Box value={time.seconds} label="Seconds" />
    </div>
  );
}
