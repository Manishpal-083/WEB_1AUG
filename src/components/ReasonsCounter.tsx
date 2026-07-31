import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loveReasons } from "@/utils/reasons";
import confetti from "canvas-confetti";

export default function ReasonsCounter() {
  const [count, setCount] = useState(0);
  const [activeReason, setActiveReason] = useState("");
  const [usedIndexes, setUsedIndexes] = useState<number[]>([]);

  // Count up animation to 100 when in view
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = Math.floor(duration / 100);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= 100) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleDrawReason = () => {
    let index: number;
    if (usedIndexes.length >= loveReasons.length) {
      index = Math.floor(Math.random() * loveReasons.length);
      setUsedIndexes([index]);
    } else {
      do {
        index = Math.floor(Math.random() * loveReasons.length);
      } while (usedIndexes.includes(index));
      setUsedIndexes((prev) => [...prev, index]);
    }

    confetti({
      particleCount: 30,
      spread: 45,
      colors: ["#FFD6E8", "#EAD7FF", "#FFE8D6", "#FFB3D1", "#FF5A8F"],
      origin: { y: 0.8 }
    });

    setActiveReason(loveReasons[index]);
  };

  return (
    <section className="py-16 px-6 max-w-md mx-auto relative select-none">
      
      {/* Title */}
      <div className="text-center mb-8 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Vast Affection
        </span>
        <h3 className="font-serif text-2xl font-bold text-gray-800">
          Why I Love My Champudii
        </h3>
        <div className="w-8 h-0.5 bg-pink-400 mx-auto mt-2" />
      </div>

      {/* Reasons card */}
      <div className="glass-card p-6 md:p-8 rounded-[28px] border border-white/60 shadow-sm flex flex-col items-center gap-6 text-center">
        
        {/* Animated Counter circle */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleDrawReason}
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-pink-300 to-[#FF8DA1] text-white flex flex-col items-center justify-center shadow-md border border-white/40 cursor-pointer"
        >
          <span className="text-4xl font-mono font-extrabold leading-none">
            {count}+
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
            Reasons
          </span>
        </motion.div>

        <p className="font-sans text-xs text-zinc-500 font-semibold px-4">
          Click the circle to draw one of the 100+ reasons I love my Champudii.
        </p>

        {/* Drawn Reason display */}
        <div className="w-full min-h-[100px] flex items-center justify-center overflow-visible relative">
          <AnimatePresence mode="wait">
            {activeReason ? (
              <motion.div
                key={activeReason}
                initial={{ opacity: 0, scale: 0.93, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="bg-[#FFFDF9] border border-amber-200/50 p-4 rounded-xl shadow-3xs w-full relative"
              >
                {/* Speech tail */}
                <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#FFFDF9] border-t border-l border-amber-200/50 rotate-45" />
                
                <p className="font-cursive text-xl text-zinc-700 font-bold leading-relaxed">
                  &ldquo;{activeReason}&rdquo;
                </p>
              </motion.div>
            ) : (
              <motion.button
                onClick={handleDrawReason}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-2.5 rounded-full border border-pink-200 text-pink-500 font-semibold text-xs hover:bg-pink-50 cursor-pointer shadow-3xs"
              >
                Reveal a Reason 🌸
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
