import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="py-20 px-6 max-w-4xl mx-auto text-center relative flex flex-col items-center justify-center select-none">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          A Personal Note
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
          My Letter to You ✉️
        </h2>
        <div className="w-10 h-0.5 bg-pink-400 mx-auto mt-3" />
      </div>

      {/* Envelope Container */}
      <div 
        role="button"
        tabIndex={0}
        aria-label={isOpen ? "Close envelope letter" : "Open envelope letter"}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="relative w-[320px] h-[210px] md:w-[370px] md:h-[240px] mb-8 cursor-pointer select-none rounded-2xl focus-visible:outline-2 focus-visible:outline-pink-400 focus-visible:outline-offset-4" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ perspective: "1000px" }}
      >
        {/* Envelope back body */}
        <div className="absolute inset-0 bg-[#FAD2E1] rounded-2xl shadow-md border border-pink-200 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-pink-300 via-transparent to-purple-300" />
        </div>

        {/* Letter paper (slides out) */}
        <motion.div
          animate={isOpen ? { y: -150, zIndex: 15, scale: 1.02 } : { y: 0, zIndex: 5, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="absolute inset-x-4 top-4 bottom-4 bg-[#FFFDF9] rounded-xl shadow p-5 border border-amber-100 flex flex-col justify-start text-left overflow-hidden z-5"
        >
          <div className="text-[8px] text-zinc-300 uppercase tracking-widest text-right">GF Day 2026</div>
          <div className="font-cursive text-zinc-700 mt-1.5 space-y-1 text-[11px] leading-relaxed">
            <p className="font-bold text-pink-500 text-xs">Hey Champudii,</p>
            <p>
              I wanted to write you something real. I know I act silly and annoy you all the time (and yes, my little Guddoo pouting is still my favorite sight)...
            </p>
            <p>
              Thank you for listening to my dumb jokes, staying up with me, and being my safe space when everything gets loud...
            </p>
            <p className="text-right font-bold text-pink-500 mt-1">Yours, Gooddooo Chimu ❤️</p>
          </div>
        </motion.div>

        {/* Envelope Front pocket */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg viewBox="0 0 370 240" className="w-full h-full drop-shadow-[-2px_-3px_5px_rgba(0,0,0,0.04)]">
            <path d="M0 240L185 120L370 240H0Z" fill="#FFAEC9" stroke="#FF9EBD" strokeWidth="1.2" />
            <path d="M0 0V240L125 120L0 0Z" fill="#FFC2D1" stroke="#FFB3D1" strokeWidth="1.2" />
            <path d="M370 0V240L245 120L370 0Z" fill="#FFC2D1" stroke="#FFB3D1" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Envelope Flap */}
        <motion.div
          style={{ originY: 0 }}
          animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-0 h-1/2 pointer-events-none"
        >
          <svg viewBox="0 0 370 120" className="w-full h-full drop-shadow-[0_3px_4px_rgba(0,0,0,0.06)]">
            <path d="M0 0L185 120L370 0H0Z" fill="#FFB3D1" stroke="#FF9EBD" strokeWidth="1.2" />
          </svg>
          
          {/* Wax seal sticker */}
          <div className="absolute left-1/2 bottom-[-14px] -translate-x-1/2 w-7 h-7 rounded-full bg-red-500 shadow flex items-center justify-center text-white text-[9px] select-none z-30">
            ❤️
          </div>
        </motion.div>
      </div>

      {/* Button helper */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-2 rounded-full border border-pink-200 text-pink-500 font-semibold text-xs hover:bg-pink-50 transition duration-300 cursor-pointer shadow-sm"
      >
        {isOpen ? "Close Letter ✉️" : "Open Letter ✉️"}
      </button>

      {/* Full screen modal letter review if opened */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              className="bg-[#FFFDF9] max-w-lg w-full rounded-2xl p-6 md:p-8 shadow-2xl border border-amber-100 text-left cursor-default select-text"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between border-b border-pink-100 pb-3 mb-6 select-none">
                <span className="font-sans text-xs font-bold tracking-widest text-pink-400 uppercase">Handwritten Note</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-pink-500 font-bold text-xs cursor-pointer p-1"
                >
                  Close
                </button>
              </div>

              {/* Styled handwriting script */}
              <div className="font-cursive text-zinc-700 text-2xl md:text-3xl space-y-5 leading-relaxed">
                <p className="font-bold text-pink-500 text-3xl">Hey Champudii,</p>
                <p>
                  I wanted to write you something real. I know I act silly and annoy you all the time (and yes, my little Guddoo pouting is still my favorite sight), but I wanted you to know how much you truly mean to me.
                </p>
                <p>
                  Looking at your old photos, from when you were just a tiny kid wrapped in a towel, to how gorgeous you look today, it just hits me how lucky I am. My prettiest girl, my sweet Champaa.
                </p>
                <p>
                  You are my absolute favorite human, hn favorite hooman h tu mera kuchupuchu. Thank you for listening to my dumb jokes, staying up with me, and being my safe space when everything gets loud. I promise to support you, make you laugh, and choose you every single time.
                </p>
                <p>
                  Happy Girlfriend Day, my Butkii. I love you, Faguniyaa. More than my words will ever be able to explain.
                </p>
                <p className="text-right font-bold text-pink-500 mt-6 text-3xl">Yours forever and always,</p>
                <p className="text-right font-bold text-pink-500 text-3xl">TINDASUR ❤️</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
