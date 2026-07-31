import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface UnlockDetail {
  name: string;
  message: string;
}

export function triggerEasterEgg(name: string, message: string) {
  const event = new CustomEvent("easter-egg-unlocked", {
    detail: { name, message }
  });
  window.dispatchEvent(event);
}

export default function EasterEggs() {
  const [toast, setToast] = useState<UnlockDetail | null>(null);
  const [unlockedEggs, setUnlockedEggs] = useState<string[]>([]);

  useEffect(() => {
    const handleUnlock = (e: Event) => {
      const { name, message } = (e as CustomEvent<UnlockDetail>).detail;
      
      // Prevent spamming the same egg toast
      if (unlockedEggs.includes(name)) {
        // Still fire a tiny confetti pop but don't show toast again
        confetti({ particleCount: 15, spread: 30, colors: ["#FFB3D1"] });
        return;
      }

      setUnlockedEggs((prev) => [...prev, name]);
      setToast({ name, message });

      // Celebration Confetti burst
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ["#FFD6E8", "#EAD7FF", "#FFE8D6", "#FFB3D1", "#FF5A8F"],
        origin: { y: 0.85 }
      });

      // Auto dismiss toast after 4 seconds
      setTimeout(() => {
        setToast(null);
      }, 4500);
    };

    window.addEventListener("easter-egg-unlocked", handleUnlock);
    return () => {
      window.removeEventListener("easter-egg-unlocked", handleUnlock);
    };
  }, [unlockedEggs]);

  const handleMoonDoubleTap = (e: React.MouseEvent) => {
    if (e.detail === 2) { // Double tap check
      triggerEasterEgg("Moon", "You found the Moon Egg! I love you to the moon and back, times infinity 🌙");
    }
  };

  return (
    <>
      {/* 1. Subtle decorative floating Easter Egg stickers on margins */}
      
      {/* Tiny Moon: Double click me */}
      <div 
        onClick={handleMoonDoubleTap}
        className="absolute top-[28%] left-3 md:left-8 text-2xl cursor-pointer select-none filter hover:scale-125 transition-transform z-20 opacity-40 hover:opacity-90 active:scale-95"
        title="Double click me!"
      >
        🌙
      </div>

      {/* Tiny Flower: Click me */}
      <div 
        onClick={() => triggerEasterEgg("Flower", "You found the Flower Egg! Here is a virtual rose for my Faguniyaa 🌹")}
        className="absolute top-[52%] right-3 md:right-8 text-2xl cursor-pointer select-none filter hover:scale-125 transition-transform z-20 opacity-40 hover:opacity-90 active:scale-95"
        title="Click me!"
      >
        🌸
      </div>

      {/* Tiny Teddy: Click me */}
      <div 
        onClick={() => triggerEasterEgg("Teddy", "You found the Teddy Egg! Sending you the biggest, warmest virtual hug 🧸")}
        className="absolute top-[75%] left-3 md:left-8 text-2xl cursor-pointer select-none filter hover:scale-125 transition-transform z-20 opacity-40 hover:opacity-90 active:scale-95"
        title="Click me!"
      >
        🧸
      </div>

      {/* 2. Floating Unlocked Toast Alert Banner */}
      <div className="fixed bottom-20 inset-x-6 flex justify-center z-[99999] pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-[#FFFDF9] border-2 border-pink-200 p-5 rounded-2xl shadow-xl max-w-sm w-full pointer-events-auto text-left flex gap-3 relative select-none"
            >
              <div className="text-3xl select-none">🎁</div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-pink-400 uppercase tracking-widest leading-none">
                  Secret Unlocked! ({unlockedEggs.length}/5)
                </span>
                <p className="font-cursive text-lg text-zinc-700 font-bold leading-tight mt-1">
                  {toast.message}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
