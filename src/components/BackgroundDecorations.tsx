import { motion } from "framer-motion";

export default function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* ☁️ Cloud 1 (Top Left) */}
      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-[8%] left-[5%] opacity-35 w-24 md:w-32 text-zinc-300"
      >
        <svg viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 50 C20 40, 30 35, 40 35 C45 25, 60 25, 65 35 C75 35, 80 40, 80 50 Z" />
        </svg>
      </motion.div>

      {/* ☁️ Cloud 2 (Mid Right) */}
      <motion.div
        animate={{ x: [20, -25, 20] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute top-[38%] right-[4%] opacity-25 w-28 md:w-36 text-zinc-300"
      >
        <svg viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 50 C20 40, 30 35, 40 35 C45 25, 60 25, 65 35 C75 35, 80 40, 80 50 Z" />
        </svg>
      </motion.div>

      {/* ☁️ Cloud 3 (Bottom Left) */}
      <motion.div
        animate={{ x: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
        className="absolute top-[68%] left-[3%] opacity-30 w-24 md:w-32 text-zinc-300"
      >
        <svg viewBox="0 0 100 60" fill="currentColor">
          <path d="M20 50 C20 40, 30 35, 40 35 C45 25, 60 25, 65 35 C75 35, 80 40, 80 50 Z" />
        </svg>
      </motion.div>

      {/* 🦋 Butterflies (Tiny fluttering paths) */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          rotate: [-4, 4, -4]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[22%] left-[12%] text-pink-300/40 text-base"
      >
        🦋
      </motion.div>

      <motion.div
        animate={{ 
          y: [12, -12, 12],
          x: [6, -6, 6],
          rotate: [5, -5, 5]
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-[60%] right-[10%] text-purple-300/35 text-base"
      >
        🦋
      </motion.div>

      {/* ⭐ Twinkling Small Stars scattered */}
      <div className="absolute top-[15%] right-[15%] w-1 h-1 bg-pink-300 rounded-full animate-pulse" />
      <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[82%] right-[12%] w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />

    </div>
  );
}
