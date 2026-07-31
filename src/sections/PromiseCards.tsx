import { motion } from "framer-motion";
import { Headphones, Heart, Star, Sparkles, Smile, ShieldCheck } from "lucide-react";

interface PromiseItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
}

const promises: PromiseItem[] = [
  {
    title: "I'll always listen.",
    icon: <Headphones className="text-purple-400" size={20} />,
    desc: "To your longest rants, your quiet moments, and everything in between. Your thoughts will always have a safe space with me.",
    color: "hover:border-pastel-lavender hover:bg-pastel-lavender/5",
  },
  {
    title: "I'll always support you.",
    icon: <Sparkles className="text-pink-400" size={20} />,
    desc: "In every dream you chase and doubt you face. I will always be your number one cheerleader and supporter.",
    color: "hover:border-pastel-pink hover:bg-pastel-pink/5",
  },
  {
    title: "I'll always choose you.",
    icon: <Heart className="text-rose-400" size={20} fill="currentColor" />,
    desc: "Every single day, in every situation. You are my first choice, my only choice, and my final choice.",
    color: "hover:border-rose-200 hover:bg-rose-50/5",
  },
  {
    title: "I'll always make you smile.",
    icon: <Smile className="text-amber-400" size={20} />,
    desc: "Even on your gloomiest days. I promise to tell silly jokes, act goofy, and do whatever it takes to see your eyes light up.",
    color: "hover:border-pastel-peach hover:bg-pastel-peach/5",
  },
  {
    title: "I'll always stand by you.",
    icon: <Star className="text-yellow-400" size={20} fill="currentColor" />,
    desc: "Through good times and challenging times. Hand in hand, we will face whatever this world throws at us.",
    color: "hover:border-yellow-200 hover:bg-yellow-50/5",
  },
  {
    title: "I'll always protect you.",
    icon: <ShieldCheck className="text-blue-400" size={20} />,
    desc: "Keep you safe, cozy, and wrapped in warm hugs. Your peace of mind and comfort will always be my top priority.",
    color: "hover:border-blue-200 hover:bg-blue-50/5",
  },
];

export default function PromiseCards() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative select-none">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Our Vows
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
          My Promises to You 🌸
        </h2>
        <div className="w-10 h-0.5 bg-pink-400 mx-auto mt-3" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promises.map((promise, index) => (
          <motion.div
            key={promise.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className={`glass-card p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col gap-3.5 text-left transition-all duration-300 ${promise.color}`}
          >
            {/* Icon tag */}
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs">
              {promise.icon}
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-gray-800">
                {promise.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
                {promise.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
