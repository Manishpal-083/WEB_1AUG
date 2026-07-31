import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CursorTrail from "@/components/CursorTrail";
import MusicPlayer from "@/components/MusicPlayer";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Hero from "@/sections/Hero";
import OurStory from "@/sections/OurStory";
import WhySpecial from "@/sections/WhySpecial";
import MemoryGallery from "@/sections/MemoryGallery";
import LoveLetter from "@/sections/LoveLetter";
import PromiseCards from "@/sections/PromiseCards";
import Countdown from "@/sections/Countdown";
import Ending from "@/sections/Ending";

// New premium interactive & decorative components
import BackgroundDecorations from "@/components/BackgroundDecorations";
import EasterEggs from "@/components/EasterEggs";
import ConversationBubble from "@/components/ConversationBubble";
import ReasonsCounter from "@/components/ReasonsCounter";
import LoveMeter from "@/components/LoveMeter";
import BucketList from "@/components/BucketList";
import PlaylistCard from "@/components/PlaylistCard";
import LoveCertificate from "@/components/LoveCertificate";
import { 
  StickmanHoldingHands, 
  StickmanGivingFlower, 
  StickmanHugging, 
  StickmanUnderMoon 
} from "@/components/StickmanDoodles";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useSmoothScroll();

  useEffect(() => {
    // Show loading screen for 1.8 seconds to display heart animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full bg-[#FFF9F5] selection:bg-pink-100 selection:text-pink-800 overflow-x-hidden"
      style={{
        // High-performance background glow: radial gradients avoid expensive blur filters during scroll repaint loops
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(255, 214, 232, 0.45) 0%, transparent 35%),
          radial-gradient(circle at 85% 45%, rgba(234, 215, 255, 0.4) 0%, transparent 40%),
          radial-gradient(circle at 35% 85%, rgba(255, 232, 214, 0.4) 0%, transparent 35%)
        `,
        backgroundAttachment: "fixed"
      }}
    >
      {/* A. Background Clouds, twinking stars, and butterflies */}
      <BackgroundDecorations />

      {/* B. Floating Sticky Notes on side margins (Scrapbook feel) */}
      <div className="absolute top-[18%] left-[2%] md:left-[5%] rotate-[-4deg] bg-[#FFF275]/50 border border-yellow-200/50 p-2.5 rounded-lg shadow-3xs text-[10px] md:text-xs font-cursive font-bold text-yellow-850 z-10 pointer-events-auto select-none hover:scale-105 transition-transform">
        📌 Certified Cutie 🌸
      </div>
      <div className="absolute top-[35%] right-[2%] md:right-[5%] rotate-[3deg] bg-pink-100/50 border border-pink-200/50 p-2.5 rounded-lg shadow-3xs text-[10px] md:text-xs font-cursive font-bold text-pink-700 z-10 pointer-events-auto select-none hover:scale-105 transition-transform">
        📌 Property of Gooddooo ❤️
      </div>
      <div className="absolute top-[58%] left-[2%] md:left-[5%] rotate-[-3deg] bg-purple-100/50 border border-purple-200/50 p-2.5 rounded-lg shadow-3xs text-[10px] md:text-xs font-cursive font-bold text-purple-700 z-10 pointer-events-auto select-none hover:scale-105 transition-transform">
        📌 Smile detected. ✨
      </div>
      <div className="absolute top-[72%] right-[2%] md:right-[5%] rotate-[4deg] bg-[#FFE8D6]/50 border border-orange-200/50 p-2.5 rounded-lg shadow-3xs text-[10px] md:text-xs font-cursive font-bold text-orange-700 z-10 pointer-events-auto select-none hover:scale-105 transition-transform">
        📌 100% Cute. 🥰
      </div>
      <div className="absolute top-[88%] left-[2%] md:left-[5%] rotate-[5deg] bg-red-100/40 border border-red-200/40 p-2.5 rounded-lg shadow-3xs text-[10px] md:text-xs font-cursive font-bold text-red-700 z-10 pointer-events-auto select-none hover:scale-105 transition-transform">
        📌 Warning: Too Beautiful. 🛑
      </div>

      {/* C. Global Interactivity Canvas Trail & corner music widget */}
      <CursorTrail />
      <MusicPlayer />

      {/* D. Easter Egg sticker collectors & alert system */}
      <EasterEggs />

      {/* E. Loading Cover */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* F. Core Page Content */}
      <div className="w-full flex flex-col items-center">
        
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Chat card block between sections */}
        <ConversationBubble />
        
        {/* Tiny Love Fact 1 */}
        <div className="py-6 text-center text-xs md:text-sm font-cursive font-bold text-pink-400 select-none">
          &ldquo;Every scroll = one more reason I love you. ❤️&rdquo;
        </div>

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />
        
        {/* Section 2: Timeline Story (Baby to Teen) */}
        <div className="relative w-full">
          <div className="absolute top-2 right-1/2 translate-x-1/2 z-10">
            <StickmanHoldingHands />
          </div>
          <OurStory />
        </div>

        {/* Tiny Love Fact 2 */}
        <div className="py-6 text-center text-xs md:text-sm font-cursive font-bold text-purple-400 select-none">
          &ldquo;You smiled over 10,000 times in my imagination. ✨&rdquo;
        </div>

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* Section 3: Why Special Cards */}
        <div className="relative w-full">
          <div className="absolute top-2 right-1/2 translate-x-1/2 z-10">
            <StickmanHugging />
          </div>
          <WhySpecial />
        </div>

        {/* Tiny Love Fact 3 */}
        <div className="py-6 text-center text-xs md:text-sm font-cursive font-bold text-pink-400 select-none">
          &ldquo;This page was made with too much love. 🌸&rdquo;
        </div>

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* Section 4: Memory Gallery Scrapbook (Recent photos) */}
        <div className="relative w-full">
          <div className="absolute top-2 right-1/2 translate-x-1/2 z-10">
            <StickmanGivingFlower />
          </div>
          <MemoryGallery />
        </div>

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* Section 5: Handwritten Note in Envelope */}
        <div className="relative w-full">
          <div className="absolute top-2 right-1/2 translate-x-1/2 z-10">
            <StickmanUnderMoon />
          </div>
          <LoveLetter />
        </div>

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* Section 6: Promise Vow Cards */}
        <PromiseCards />

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* ====================================================== */}
        {/* 🎀 NEW: THE INTERACTIVE FUN SCRAPBOOK CORNER 🎀 */}
        {/* ====================================================== */}
        <div className="w-full max-w-4xl px-6 py-12">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">Fun Corner</span>
            <h2 className="font-serif text-3xl font-bold text-gray-800">Our Small Scrapbook 🧸</h2>
            <div className="w-10 h-0.5 bg-pink-400 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 1. Interactive Reasons Counter */}
            <ReasonsCounter />

            {/* 2. Interactive Future Bucket List */}
            <BucketList />

            {/* 3. Playlist Reminders Widget */}
            <PlaylistCard />

            {/* 4. Mini Love Overflow Loading Bar */}
            <LoveMeter />
          </div>

          {/* 5. Official Cupid Certificate centered below the widgets */}
          <div className="mt-8">
            <LoveCertificate />
          </div>

        </div>
        {/* ====================================================== */}

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* Section 7: Live Together Counters & Countdown Target */}
        <Countdown />

        <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        {/* Section 8: Final Click Confetti Beating Heart */}
        <Ending />
      </div>

      {/* Footer */}
      <footer className="py-14 text-center select-none z-10 relative bg-gradient-to-t from-white/40 to-transparent flex flex-col items-center gap-1.5 px-6">
        <p className="text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-widest leading-none">
          Made with endless love ❤️
        </p>
        <p className="text-[9px] md:text-[10px] text-zinc-400 font-bold tracking-wider opacity-85 leading-none">
          Especially for
        </p>
        <p className="font-sans text-xs md:text-sm text-pink-500 font-bold leading-none select-none my-1">
          My Champudii • Guddoo • Butkii • Faguniyaa
        </p>
        <p className="text-[8px] md:text-[9px] text-zinc-400 font-bold tracking-widest uppercase opacity-70 leading-none">
          Designed & Developed by
        </p>
        <p className="font-cursive text-xl text-pink-600 font-bold leading-none select-none">
          Your Khasam ❤️ Gooddooo Chimu
        </p>
      </footer>
    </div>
  );
}
