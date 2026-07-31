import { motion } from "framer-motion";

// SVG Doodles: Minimalist black-line couple drawings

export function StickmanGivingFlower() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none" title="Champudii getting a rose 🌹">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-zinc-700 fill-none" strokeWidth="2.5" strokeLinecap="round">
        {/* Left Stickman (Boy) */}
        <circle cx="35" cy="40" r="8" /> {/* Head */}
        <line x1="35" y1="48" x2="35" y2="70" /> {/* Body */}
        <line x1="35" y1="52" x2="48" y2="58" /> {/* Arm reaching out */}
        <line x1="35" y1="55" x2="25" y2="65" /> {/* Left Arm */}
        <line x1="35" y1="70" x2="28" y2="85" /> {/* Left Leg */}
        <line x1="35" y1="70" x2="42" y2="85" /> {/* Right Leg */}

        {/* Flower */}
        <path d="M48 58 Q49 53 52 53" stroke="green" strokeWidth="1.5" /> {/* Stem */}
        <circle cx="52" cy="51" r="3" fill="#FF5A8F" stroke="none" /> {/* Flower Head */}

        {/* Right Stickman (Girl) */}
        <circle cx="65" cy="40" r="8" /> {/* Head */}
        {/* Cute hair loop */}
        <path d="M59 36 Q63 32 67 36" />
        <line x1="65" y1="48" x2="65" y2="70" /> {/* Body */}
        <line x1="65" y1="52" x2="52" y2="58" /> {/* Arm taking flower */}
        <line x1="65" y1="55" x2="75" y2="65" /> {/* Right Arm */}
        <line x1="65" y1="70" x2="58" y2="85" /> {/* Left Leg */}
        <line x1="65" y1="70" x2="72" y2="85" /> {/* Right Leg */}
        
        {/* Small Heart floating */}
        <motion.text
          x="46"
          y="30"
          fontSize="10"
          fill="red"
          className="stroke-none"
          animate={{ scale: [1, 1.2, 1], y: [30, 27, 30] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ❤️
        </motion.text>
      </svg>
    </div>
  );
}

export function StickmanHugging() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none" title="Hugs for Butkii 🧸">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-zinc-700 fill-none" strokeWidth="2.5" strokeLinecap="round">
        {/* Left Stickman */}
        <circle cx="46" cy="40" r="8" />
        <line x1="46" y1="48" x2="46" y2="70" />
        <line x1="46" y1="70" x2="38" y2="85" />
        <line x1="46" y1="70" x2="52" y2="85" />

        {/* Right Stickman */}
        <circle cx="54" cy="40" r="8" />
        <line x1="54" y1="48" x2="54" y2="70" />
        <line x1="54" y1="70" x2="48" y2="85" />
        <line x1="54" y1="70" x2="62" y2="85" />

        {/* Hugging Arms crossed */}
        <path d="M40 52 C45 56, 55 56, 60 52" />
        <path d="M38 55 C44 58, 56 58, 62 55" />

        {/* Floating Heart */}
        <motion.text
          x="46"
          y="25"
          fontSize="12"
          fill="#FF5A8F"
          className="stroke-none"
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          ❤️
        </motion.text>
      </svg>
    </div>
  );
}

export function StickmanUnderMoon() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none" title="Cozy nights under the moon 🌙">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-zinc-700 fill-none" strokeWidth="2.5" strokeLinecap="round">
        {/* Ground hill line */}
        <path d="M15 80 Q50 75 85 80" />

        {/* Crescent Moon */}
        <path d="M68 25 Q58 35 68 45 Q75 40 73 35 Q73 30 68 25Z" fill="#FFE8D6" stroke="#FFA364" strokeWidth="1.5" />

        {/* Left Stickman sitting */}
        <circle cx="40" cy="55" r="7" />
        <line x1="40" y1="62" x2="40" y2="74" />
        <line x1="40" y1="74" x2="52" y2="78" /> {/* Sitting leg */}
        <line x1="40" y1="65" x2="52" y2="65" /> {/* Arm holding girl */}

        {/* Right Stickman sitting */}
        <circle cx="49" cy="56" r="7" />
        <line x1="49" y1="63" x2="49" y2="75" />
        <line x1="49" y1="75" x2="61" y2="78" /> {/* leg */}
        <line x1="49" y1="65" x2="38" y2="65" /> {/* Arm lean on boy */}

        {/* Tiny sparkle stars */}
        <circle cx="30" cy="30" r="1" fill="#FFB3D1" />
        <circle cx="50" cy="22" r="1.2" fill="#FFB3D1" />
      </svg>
    </div>
  );
}

export function StickmanHoldingHands() {
  return (
    <div className="w-16 h-16 flex items-center justify-center select-none" title="Holding hands forever 🤝">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-zinc-700 fill-none" strokeWidth="2.5" strokeLinecap="round">
        {/* Left Stickman */}
        <circle cx="38" cy="40" r="8" />
        <line x1="38" y1="48" x2="38" y2="70" />
        <line x1="38" y1="52" x2="28" y2="65" />
        <line x1="38" y1="70" x2="30" y2="85" />
        <line x1="38" y1="70" x2="44" y2="85" />

        {/* Right Stickman */}
        <circle cx="62" cy="40" r="8" />
        <line x1="62" y1="48" x2="62" y2="70" />
        <line x1="62" y1="52" x2="72" y2="65" />
        <line x1="62" y1="70" x2="56" y2="85" />
        <line x1="62" y1="70" x2="68" y2="85" />

        {/* Holding hands lines joining in center */}
        <path d="M38 52 Q50 63 62 52" />
        
        {/* Small sparkling heart */}
        <motion.text
          x="46"
          y="48"
          fontSize="8"
          fill="#FF5A8F"
          className="stroke-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ❤️
        </motion.text>
      </svg>
    </div>
  );
}

export function StickmanUnderUmbrella() {
  return (
    <div className="w-18 h-18 flex items-center justify-center select-none" title="Cozy walks in rain 🌧️">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-zinc-700 fill-none" strokeWidth="2.5" strokeLinecap="round">
        
        {/* Umbrella top handle */}
        <path d="M30 40 C35 25, 65 25, 70 40" fill="#FFD6E8" stroke="#FF5A8F" strokeWidth="2" />
        <line x1="50" y1="40" x2="50" y2="65" /> {/* Umbrella shaft */}
        <path d="M50 65 Q50 69 46 69" /> {/* handle hook */}

        {/* Left Stickman */}
        <circle cx="43" cy="50" r="6" />
        <line x1="43" y1="56" x2="43" y2="75" />
        <line x1="43" y1="75" x2="38" y2="90" />
        <line x1="43" y1="75" x2="47" y2="90" />

        {/* Right Stickman */}
        <circle cx="57" cy="50" r="6" />
        <line x1="57" y1="56" x2="57" y2="75" />
        <line x1="57" y1="75" x2="53" y2="90" />
        <line x1="57" y1="75" x2="62" y2="90" />

        {/* Raindrops outside umbrella */}
        <line x1="20" y1="20" x2="17" y2="28" stroke="#A9D6E5" strokeWidth="1.5" />
        <line x1="80" y1="22" x2="77" y2="30" stroke="#A9D6E5" strokeWidth="1.5" />
        <line x1="28" y1="48" x2="25" y2="56" stroke="#A9D6E5" strokeWidth="1.5" />
        <line x1="72" y1="48" x2="69" y2="56" stroke="#A9D6E5" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
