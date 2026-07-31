import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function LoveMeter() {
  const [progress, setProgress] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1.5;
      if (current >= 100) {
        current = 100;
        setIsOverflow(true);
        clearInterval(interval);
        
        // Burst heart confetti on complete loading
        confetti({
          particleCount: 20,
          spread: 35,
          colors: ["#FF5A8F", "#FFB3D1"],
          origin: { y: 0.85 }
        });
      }
      setProgress(current);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 max-w-md mx-auto relative select-none">
      
      {/* Title */}
      <div className="text-center mb-8 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Love Calculator
        </span>
        <h3 className="font-serif text-2xl font-bold text-gray-800">
          Mini Love Meter 💓
        </h3>
        <div className="w-8 h-0.5 bg-pink-400 mx-auto mt-2" />
      </div>

      {/* Love Meter Card */}
      <div className="glass-card p-6 md:p-8 rounded-[28px] border border-white/60 shadow-sm flex flex-col gap-6 text-center">
        <div className="space-y-1">
          <h4 className="font-serif text-base font-bold text-zinc-700">
            Calculating affection levels...
          </h4>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
            Target: Champudii
          </p>
        </div>

        {/* Meter progress bar */}
        <div className="w-full h-5 bg-pink-50/50 rounded-full border border-pink-100 overflow-hidden relative p-0.5 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-pink-300 via-pink-400 to-[#FF5A8F] rounded-full flex items-center justify-end pr-2"
          />
        </div>

        {/* Overflow Result display */}
        <div className="h-10 flex items-center justify-center">
          {isOverflow ? (
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="space-y-1"
            >
              <p className="text-2xl font-mono font-black text-[#FF5A8F] tracking-tight leading-none animate-pulse">
                ∞%
              </p>
              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest leading-none mt-1 inline-block">
                Love Overflow 📈
              </span>
            </motion.div>
          ) : (
            <p className="text-sm font-mono font-bold text-pink-400">
              {Math.floor(progress)}%
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
