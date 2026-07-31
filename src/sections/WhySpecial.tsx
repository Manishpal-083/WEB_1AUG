import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  color: string;
}

interface SpecialItem {
  title: string;
  emoji: string;
  desc: string;
  sticker: string;
}

const items: SpecialItem[] = [
  { 
    title: "Your Kind Heart", 
    emoji: "❤️", 
    desc: "The gentle, caring way my Champudii looks after me. You always make sure I'm doing okay and keep me grounded.",
    sticker: "My Champudii ❤️"
  },
  { 
    title: "Your Radiant Smile", 
    emoji: "✨", 
    desc: "A single glance at my pretty Champaa is my ultimate reset button. You have a smile that can fix any bad day instantly.",
    sticker: "My prettiest girl."
  },
  { 
    title: "Your Adorable Pouts", 
    emoji: "🌸", 
    desc: "When my little Guddoo crosses her arms and tries to look angry. It is literally the cutest thing in the world.",
    sticker: "You'll always be my little Guddoo."
  },
  { 
    title: "Your Endless Patience", 
    emoji: "🤍", 
    desc: "How my sweet Faguniyaa always listens to my long rants, understanding my thoughts without me saying a word.",
    sticker: "My safe place."
  },
  { 
    title: "Your Cozy Hugs", 
    emoji: "🧸", 
    desc: "Keeping me safe and warm. You are my favorite person, my cutest human, and my absolute comfort zone, my Butkii.",
    sticker: "Forever my Butkii."
  },
  { 
    title: "Your Cute Quirks", 
    emoji: "🤧", 
    desc: "From your tiny kitten sneezes to the goofy faces we pull together. Every little thing about my Duduputrrr makes me love you more.",
    sticker: "My cutest human."
  },
];

const colors = ["#FF5A8F", "#FF8DA1", "#D4B2FF", "#FFB3D1", "#FFD6E8"];

export default function WhySpecial() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative select-none">
      
      {/* Handcrafted absolute text stickers placed floating in background */}
      <div className="absolute top-[10%] left-[-4%] rotate-[-6deg] text-[10px] md:text-xs font-cursive font-bold text-pink-400 bg-pink-50/50 border border-pink-200/40 px-3 py-1 rounded-full shadow-3xs hidden sm:block">
        My Good Girl 🌸
      </div>
      <div className="absolute bottom-[8%] right-[-3%] rotate-[5deg] text-[10px] md:text-xs font-cursive font-bold text-purple-400 bg-purple-50/50 border border-purple-200/40 px-3 py-1 rounded-full shadow-3xs hidden sm:block">
        My Faguniyaa ❤️
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          What makes you unique
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
          Why You&apos;re Special 🤍
        </h2>
        <div className="w-10 h-0.5 bg-pink-400 mx-auto mt-3" />
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <SpecialCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function SpecialCard({ item }: { item: SpecialItem }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [tilt] = useState(() => Math.random() * 2.0 - 1.0); 

  const triggerHeartBurst = () => {
    const burst = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: 0,
      y: 0,
      angle: (i * 60) + (Math.random() * 20 - 10),
      distance: Math.random() * 20 + 35, 
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    setParticles(burst);

    setTimeout(() => {
      setParticles([]);
    }, 600);
  };

  return (
    <motion.div
      onMouseEnter={triggerHeartBurst}
      onClick={triggerHeartBurst}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03, 
        y: -3,
        rotate: tilt * 1.5,
        boxShadow: "0 10px 22px rgba(255, 182, 193, 0.12)"
      }}
      style={{ rotate: tilt }}
      className="glass-card p-6 rounded-[22px] flex flex-col items-center text-center gap-3.5 cursor-pointer relative overflow-visible border border-white/60 shadow-3xs"
    >
      {/* Pin badge styling */}
      <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-2xl shadow-inner">
        {item.emoji}
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-base font-bold text-gray-800">
          {item.title}
        </h3>
        <p className="font-sans text-xs text-gray-500 font-medium leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Tiny handwriting tag inside card */}
      <span className="font-cursive text-xs text-pink-400 font-bold select-none opacity-80 pt-1">
        ~ {item.sticker}
      </span>

      {/* Burst particles */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible">
        <AnimatePresence>
          {particles.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const targetX = Math.cos(rad) * p.distance;
            const targetY = Math.sin(rad) * p.distance;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1.0,
                  x: targetX,
                  y: targetY
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute text-xs"
                style={{ color: p.color }}
              >
                ❤️
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
