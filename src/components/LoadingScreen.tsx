import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FFF9F5]"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        
        {/* Pulsing Loading Heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl select-none"
        >
          ❤️
        </motion.div>

        {/* Text */}
        <div className="space-y-1">
          <h2 className="font-serif text-lg font-bold text-gray-700 tracking-wide">
            Preparing your surprise...
          </h2>
          <p className="font-sans text-xs text-zinc-400 font-semibold tracking-wider uppercase animate-pulse">
            Loading memories
          </p>
        </div>
      </div>
    </motion.div>
  );
}
