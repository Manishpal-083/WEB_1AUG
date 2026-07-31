import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

// ==========================================
// 🎵 HOW TO REPLACE THE MUSIC FILE:
// ==========================================
// 1. Place your actual audio file inside the directory:
//    src/assets/music/
// 2. Name it exactly as:
//    - love_music.mp3
// 3. If your audio file uses a different name or extension,
//    simply update the import below:
//    import loveSong from "@/assets/music/my_song.mp3";
// ==========================================

import loveSong from "@/assets/music/love_music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Instantiate Audio object using imported local asset resolver
    audioRef.current = new Audio(loveSong);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.45;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Playback blocked by browser permission policies:", err);
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="glass-card flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-md border border-white/50"
      >
        {/* Play/Pause control */}
        <button
          onClick={togglePlay}
          className="relative w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-[#FF5A8F] text-white flex items-center justify-center cursor-pointer shadow hover:scale-105 active:scale-95 transition-all before:absolute before:-inset-2 before:content-['']"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={13} fill="white" /> : <Play size={13} className="ml-[2px]" fill="white" />}
        </button>

        {/* Volume controls */}
        <button
          onClick={toggleMute}
          disabled={!isPlaying}
          className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer before:absolute before:-inset-2.5 before:content-[''] ${
            isPlaying ? "text-pink-500 hover:bg-pink-100/30" : "text-zinc-400 cursor-not-allowed"
          }`}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>

        {/* Playing indicator text */}
        <AnimatePresence>
          {isPlaying && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="text-[9px] text-zinc-400 font-bold pr-1 hidden md:inline overflow-hidden whitespace-nowrap"
            >
              🎵 Melodies of love
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
