import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToStory = () => {
    const el = document.getElementById("our-story");
    if (el) {
      if ((window as any).lenisInstance) {
        (window as any).lenisInstance.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // 6 subtle floating hearts with unique paths to avoid heavy CPU load
  const hearts = [
    { id: 1, size: 16, left: "12%", delay: 0, duration: 8, drift: 20 },
    { id: 2, size: 24, left: "22%", delay: 3, duration: 10, drift: -30 },
    { id: 3, size: 12, left: "75%", delay: 1, duration: 9, drift: 15 },
    { id: 4, size: 20, left: "85%", delay: 4, duration: 11, drift: -25 },
    { id: 5, size: 14, left: "45%", delay: 2, duration: 7, drift: 10 },
    { id: 6, size: 18, left: "60%", delay: 5, duration: 12, drift: -15 },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 text-center select-none overflow-hidden">
      
      {/* 5-6 Lightweight floating hearts in Hero (GPU optimized) */}
      <div className="absolute inset-x-0 bottom-0 top-1/4 pointer-events-none overflow-hidden z-0">
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: "80vh", opacity: 0, x: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.4, 0.4, 0],
              x: [0, h.drift, -h.drift, 0]
            }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: "absolute",
              left: h.left,
              fontSize: `${h.size}px`,
              color: "#FFB3D1",
              willChange: "transform, opacity",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl flex flex-col items-center gap-8 relative z-10">
        
        {/* Cute top tag */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-pink-500/80 text-xs font-bold tracking-[0.15em] uppercase bg-white/70 border border-white/50 px-4 py-1.5 rounded-full shadow-sm"
        >
          ✨ Made just for you
        </motion.div>

        {/* Happy Girlfriend Day Heading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl font-extrabold tracking-tight text-pink-600 leading-[1.1] select-none"
          >
            Happy Girlfriend Day, my Champudii <span className="inline-block animate-heart-beat">❤️</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-sans text-base md:text-xl text-[#7E6A72] max-w-xl mx-auto leading-relaxed px-4 select-none"
          >
            &ldquo;You are my favorite notification, my safest place, and my prettiest girl.&rdquo;
          </motion.p>
        </div>

        {/* Beating Heart between us */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            scale: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
            delay: 0.45
          }}
          className="w-20 h-20 flex items-center justify-center relative cursor-pointer"
          whileHover={{ scale: 1.15 }}
        >
          <div className="absolute w-12 h-12 bg-gradient-to-tr from-pink-500 to-pink-400 rounded-full -translate-x-6 shadow-md shadow-pink-200" />
          <div className="absolute w-12 h-12 bg-gradient-to-tr from-pink-500 to-pink-400 rounded-full -translate-y-6 shadow-md shadow-pink-200" />
          <div className="absolute w-12 h-12 bg-gradient-to-tr from-pink-500 to-pink-400 rotate-45 shadow-md shadow-pink-200" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-2"
        >
          <motion.button
            onClick={handleScrollToStory}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-[#FF8DA1] to-[#FF5A8F] text-white rounded-full font-bold text-base shadow-[0_6px_20px_rgba(255,90,143,0.35)] hover:shadow-[0_8px_25px_rgba(255,90,143,0.45)] transition-all duration-300 border border-white/10 cursor-pointer"
          >
            Open Your Surprise 🎁
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
}
