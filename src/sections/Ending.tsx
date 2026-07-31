import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { triggerEasterEgg } from "@/components/EasterEggs";

export default function Ending() {
  const [clicked, setClicked] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handleHeartClick = () => {
    setClicked(true);
    const newCount = clicks + 1;
    setClicks(newCount);
    if (newCount === 5) {
      triggerEasterEgg("Heart", "You unlocked the Heart Egg! Gooddooo loves you 5x more ❤️");
    }

    // Canvas Confetti sprays
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.75 },
      colors: ["#FFD6E8", "#EAD7FF", "#FFE8D6", "#FFB3D1", "#FF5A8F"],
    });
  };

  return (
    <section className="py-28 px-6 max-w-4xl mx-auto text-center relative flex flex-col items-center justify-center min-h-[60vh] select-none">
      
      <div className="max-w-2xl flex flex-col items-center gap-10">
        
        {/* Large Glowing Heart */}
        <motion.div
          animate={clicked ? { scale: [1, 1.15, 1.1] } : { scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          className="relative w-32 h-32 flex items-center justify-center cursor-pointer select-none filter drop-shadow-[0_8px_16px_rgba(255,90,143,0.18)]"
          onClick={handleHeartClick}
        >
          <div className="absolute w-16 h-16 bg-gradient-to-tr from-pink-500 to-pink-400 rounded-full -translate-x-8" />
          <div className="absolute w-16 h-16 bg-gradient-to-tr from-pink-500 to-pink-400 rounded-full -translate-y-8" />
          <div className="absolute w-16 h-16 bg-gradient-to-tr from-pink-500 to-pink-400 rotate-45" />
          <div className="absolute text-xl text-white font-serif z-10 font-bold select-none">GF</div>
        </motion.div>

        {/* Text reveals */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl font-extrabold text-[#FF5A8F] tracking-tight"
          >
            I Love You, my Guddoo ❤️
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-lg md:text-2xl text-gray-700 font-semibold tracking-wide"
          >
            Happy Girlfriend Day, my Champaa
          </motion.p>
        </div>

        {/* Action helper */}
        {!clicked && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1 }}
            className="text-xs text-zinc-400 italic"
          >
            (Tap the heart for one last surprise)
          </motion.p>
        )}
      </div>

    </section>
  );
}
