import { motion } from "framer-motion";

export default function LoveCertificate() {
  return (
    <section className="py-20 px-6 max-w-lg mx-auto relative select-none">
      
      {/* Certificate Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        whileHover={{ y: -4 }}
        className="glass-card p-6 md:p-10 rounded-[32px] border-2 border-pink-200 relative overflow-hidden shadow-md bg-gradient-to-b from-[#FFFDF9] to-pink-50/5 text-center flex flex-col items-center gap-6"
      >
        {/* Intricate decorative border lines */}
        <div className="absolute inset-2 border border-dashed border-pink-200/50 rounded-[24px] pointer-events-none" />

        {/* Certificate Title Header */}
        <div className="space-y-1">
          <span className="text-[9px] font-extrabold tracking-[0.2em] text-pink-400 uppercase">Official Document</span>
          <h3 className="font-serif text-2xl font-bold text-gray-800 tracking-tight">
            Government of Love Affairs 📜
          </h3>
        </div>
        
        <div className="w-12 h-[1px] bg-pink-300" />

        {/* Certificate body */}
        <div className="space-y-4 font-sans">
          <p className="text-xs text-zinc-400 font-semibold tracking-wider uppercase leading-none">This certifies that</p>
          
          <h4 className="font-serif text-2xl font-extrabold text-pink-500 leading-tight">
            Champudii ❤️
          </h4>
          
          <p className="text-xs text-zinc-400 font-semibold tracking-wider uppercase leading-none">has been permanently captured by</p>
          
          <h4 className="font-serif text-2xl font-extrabold text-gray-800 leading-tight">
            Gooddooo Chimu ❤️
          </h4>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 w-full border-t border-b border-pink-100/50 py-4 my-2 text-left">
          <div className="space-y-1 pl-4 border-r border-pink-100/50">
            <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Status</span>
            <p className="font-sans text-xs font-bold text-pink-600 leading-none mt-1">Lifetime Valid</p>
          </div>
          <div className="space-y-1 pl-4">
            <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Punishment for leaving</span>
            <p className="font-sans text-[11px] font-bold text-zinc-600 leading-tight mt-1">Unlimited Hugs 🤍</p>
          </div>
        </div>

        {/* Approval Seal Stamp */}
        <div className="flex flex-col items-center gap-1 select-none relative mt-2">
          {/* Cupid Seal SVG */}
          <div className="w-16 h-16 rounded-full border border-dashed border-red-400/60 flex items-center justify-center relative rotate-[-12deg] bg-red-50/20 shadow-3xs">
            <span className="font-cursive text-red-500 font-bold text-lg select-none">Cupid</span>
            <div className="absolute inset-1.5 border border-red-300/30 rounded-full" />
          </div>
          
          <span className="text-[8px] font-extrabold tracking-widest text-zinc-400 uppercase mt-1.5">
            Approved by: ❤️ Cupid Department ❤️
          </span>
        </div>

      </motion.div>
    </section>
  );
}
