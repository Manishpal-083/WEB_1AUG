import { motion } from "framer-motion";
import photo1 from "@/assets/images/photo1.jpg";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";

interface JourneyStage {
  title: string;
  photo: string;
  tag: string;
  desc: string;
  quote: string;
}

const stages: JourneyStage[] = [
  {
    title: "The Tiny Baby Days 🌸",
    photo: photo1,
    tag: "My little baby Guddoo",
    desc: "Look at my tiny Champudii wrapped up in her checkered towel! Giving that sweet half-smile and looking so little. It is absolutely crazy to think that this adorable little kid would one day grow up and become the center of my entire universe.",
    quote: "You'll always be my little Guddoo."
  },
  {
    title: "Growing Up & Smiling 💖",
    photo: photo2,
    tag: "My happy Faguniyaa",
    desc: "Growing up and spreading warmth with that beautiful smile. Whether lying down and laughing or just being your cheerful self, you've always had that soft, sparkling look in your eyes that makes the whole world feel a lot kinder.",
    quote: "My prettiest girl."
  },
  {
    title: "The Cozy Beanie Phase ❄️",
    photo: photo3,
    tag: "My pretty Duduputrrr",
    desc: "Adorably bundled up in a pink sweater and a cozy beanie, looking so sweet. Every phase of your life, from the baby moments to this beautiful girl standing before me, is my absolute favorite chapter.",
    quote: "I'll choose you every single time."
  }
];

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 px-6 max-w-4xl mx-auto relative select-none">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Our Journey
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-gray-800 max-w-xl mx-auto leading-tight">
          &ldquo;My little baby grew up into the most beautiful girl in my life.&rdquo;
        </h2>
        <div className="w-10 h-0.5 bg-pink-400 mx-auto" />
      </div>

      {/* Journey Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-pink-200 via-purple-100 to-transparent -translate-x-[1px] md:-translate-x-1/2" />

        <div className="space-y-16 relative">
          {stages.map((stage, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={stage.title}
                className="flex flex-col md:flex-row items-stretch md:items-center relative"
              >
                {/* Timeline node dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border border-pink-400 -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-xs" />

                {/* Left Side spacer */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-10 flex ${isEven ? "md:justify-end" : "md:hidden"}`}>
                  {isEven && (
                    <JourneyCard stage={stage} />
                  )}
                </div>

                {/* Right Side spacer */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-10 flex ${!isEven ? "md:justify-start" : "hidden md:flex"}`}>
                  {!isEven && (
                    <JourneyCard stage={stage} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JourneyCard({ stage }: { stage: JourneyStage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass-card p-5 rounded-2xl max-w-sm w-full shadow-xs border border-white/60 flex flex-col gap-4 text-left select-none relative overflow-visible"
    >
      {/* Polaroid style image border inside card */}
      <div className="w-full bg-[#FAF8F5] p-2.5 pb-4 rounded-lg shadow-2xs border border-gray-150 flex flex-col items-center gap-2.5">
        <div className="w-full aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden border border-gray-200">
          <img
            src={stage.photo}
            alt={stage.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <span className="font-cursive text-lg text-pink-500 font-bold select-none italic text-center">
          {stage.quote}
        </span>
      </div>

      <div className="space-y-1.5 px-1">
        <span className="text-[10px] font-bold tracking-wider text-pink-400 uppercase">
          {stage.tag}
        </span>
        <h3 className="font-serif text-lg font-bold text-gray-800">
          {stage.title}
        </h3>
        <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
          {stage.desc}
        </p>
      </div>
    </motion.div>
  );
}
