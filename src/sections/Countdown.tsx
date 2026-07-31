import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// ==========================================
// 📅 EDIT TIMINGS HERE:
// ==========================================
// 1. Relationship Start Date
const RELATIONSHIP_START = new Date("2025-01-18T00:00:00");

// 2. Girlfriend Day Target Date (1 August 2026, 00:00 IST)
// IST is UTC+5:30. Setting it in ISO format guarantees it resolves at the same time everywhere.
const TARGET_DATE = new Date("2026-08-01T00:00:00+05:30");
// ==========================================

interface DateDiff {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeartConfetti {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  driftX: number;
  opacity: number;
}

export default function Countdown() {
  const [now, setNow] = useState(new Date());
  const [isCelebration, setIsCelebration] = useState(false);
  const [hearts, setHearts] = useState<HeartConfetti[]>([]);

  // 1. Time Together calculation using calendar borrow arithmetic
  const getTimeTogether = (): DateDiff => {
    let years = now.getFullYear() - RELATIONSHIP_START.getFullYear();
    let months = now.getMonth() - RELATIONSHIP_START.getMonth();
    let days = now.getDate() - RELATIONSHIP_START.getDate();
    let hours = now.getHours() - RELATIONSHIP_START.getHours();
    let minutes = now.getMinutes() - RELATIONSHIP_START.getMinutes();
    let seconds = now.getSeconds() - RELATIONSHIP_START.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      // Get length of the previous month
      const prevMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonthEnd.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  // 2. Girlfriend Day Countdown calculation
  const getCountdownTime = () => {
    const diffMs = TARGET_DATE.getTime() - now.getTime();
    if (diffMs <= 0) return null;

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      setNow(currentDate);

      // Check if target date is reached
      if (currentDate.getTime() >= TARGET_DATE.getTime()) {
        setIsCelebration(true);
      }
    }, 1000);

    // Initial check
    if (new Date().getTime() >= TARGET_DATE.getTime()) {
      setIsCelebration(true);
    }

    return () => clearInterval(timer);
  }, []);

  // 3. Trigger celebration confetti and floating hearts
  useEffect(() => {
    if (!isCelebration) return;

    // Burst initial confetti
    confetti({
      particleCount: 150,
      spread: 80,
      colors: ["#FFD6E8", "#EAD7FF", "#FFE8D6", "#FFB3D1", "#FF5A8F"],
      origin: { y: 0.7 }
    });

    // Create 20 floating celebration hearts that rise continuously
    const items = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 12,
      delay: Math.random() * -15, // pre-scattered
      duration: Math.random() * 8 + 10, // 10-18s float
      driftX: Math.random() * 60 - 30,
      opacity: Math.random() * 0.4 + 0.2
    }));
    setHearts(items);

    // Spray confetti every 4.5 seconds to maintain celebration atmosphere
    const sprayInterval = setInterval(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#FFD6E8", "#FFB3D1", "#FF5A8F"]
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#FFD6E8", "#FFB3D1", "#FF5A8F"]
      });
    }, 4500);

    return () => clearInterval(sprayInterval);
  }, [isCelebration]);

  const together = getTimeTogether();
  const countdown = getCountdownTime();

  return (
    <section id="countdown" className="py-20 px-6 max-w-5xl mx-auto text-center relative select-none">
      
      {/* Floating hearts overlay inside celebration context */}
      {isCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {hearts.map((h) => (
            <div
              key={h.id}
              className="absolute text-pink-400/35 animate-float-up select-none"
              style={{
                left: `${h.left}%`,
                bottom: "-30px",
                fontSize: `${h.size}px`,
                ["--duration" as any]: `${h.duration}s`,
                ["--delay" as any]: `${h.delay}s`,
                ["--drift-x" as any]: `${h.driftX}px`,
                ["--target-opacity" as any]: h.opacity,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {/* Grid wrapper for Relationship Timer and Girlfriend Day Countdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        
        {/* Card 1: Time Together Relationship Timer */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-8 rounded-[28px] border border-white/60 shadow-sm flex flex-col justify-between"
        >
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <span>❤️ We&apos;ve been together for</span>
            </h3>
            <div className="w-10 h-0.5 bg-pink-400 mx-auto" />
            
            {/* Display Year, Month, Day, Hours, Mins, Secs */}
            <div className="grid grid-cols-3 gap-3 text-center my-4">
              <TimerUnit value={together.years} label="Year" />
              <TimerUnit value={together.months} label="Month" />
              <TimerUnit value={together.days} label="Day" />
              <TimerUnit value={together.hours} label="Hours" isTime />
              <TimerUnit value={together.minutes} label="Mins" isTime />
              <TimerUnit value={together.seconds} label="Secs" isTime />
            </div>
          </div>
          <p className="text-[10px] text-zinc-400 italic mt-4">
            Counting from: {RELATIONSHIP_START.toLocaleDateString(undefined, { dateStyle: "long" })}
          </p>
        </motion.div>

        {/* Card 2: Girlfriend Day Countdown */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-8 rounded-[28px] border border-white/60 shadow-sm flex flex-col justify-between relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isCelebration && countdown ? (
              // Countdown Card
              <motion.div
                key="countdown"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-gray-800">
                    Girlfriend Day Countdown 🎀
                  </h3>
                  <div className="w-10 h-0.5 bg-pink-400 mx-auto" />
                  
                  <div className="grid grid-cols-4 gap-2.5 text-center my-4">
                    <TimerUnit value={countdown.days} label="Days" />
                    <TimerUnit value={countdown.hours} label="Hours" isTime />
                    <TimerUnit value={countdown.minutes} label="Mins" isTime />
                    <TimerUnit value={countdown.seconds} label="Secs" isTime />
                  </div>
                </div>

                <p className="font-sans text-sm text-[#FF5A8F] font-bold mt-4 select-none animate-pulse">
                  &ldquo;Only left until your surprise, my cute Butkii ❤️&rdquo;
                </p>
              </motion.div>
            ) : (
              // Celebration Card (Triggers when countdown reaches 0)
              <motion.div
                key="celebration"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="space-y-6 flex flex-col justify-center items-center h-full py-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-5xl select-none"
                >
                  🎉
                </motion.div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#FF5A8F] leading-tight select-none drop-shadow-[0_2px_4px_rgba(255,182,193,0.3)]">
                  ❤️ Happy Girlfriend Day, my Champudii ❤️
                </h3>
                
                <p className="font-sans text-xs text-gray-500 font-semibold max-w-xs leading-relaxed">
                  The wait is over! Today is all about celebrating you, my prettiest girl, my sweet Guddoo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function TimerUnit({ value, label, isTime = false }: { value: number | string; label: string; isTime?: boolean }) {
  const displayVal = typeof value === "number" && isTime && value < 10 ? `0${value}` : value.toString();

  return (
    <div className="bg-white/80 border border-pink-100/50 rounded-xl p-2.5 flex flex-col justify-center items-center shadow-xs">
      <span className="text-xl md:text-2xl font-mono font-bold text-pink-600 tracking-tight leading-none">
        {displayVal}
      </span>
      <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-1.5 leading-none">
        {label}
      </span>
    </div>
  );
}
