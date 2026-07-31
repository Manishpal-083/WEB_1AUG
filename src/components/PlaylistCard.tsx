import { useState } from "react";
import { Play, Headphones, Music } from "lucide-react";

interface Song {
  title: string;
  duration: string;
  tag: string;
}

const playlist: Song[] = [
  { title: "Guddoo's Favorite Lofi 🎧", duration: "2:38", tag: "My Champudii" },
  { title: "Rainy Walks with Champaa 🌧️", duration: "3:12", tag: "My safest place" },
  { title: "Meri Faguniyaa (lofi theme)", duration: "2:54", tag: "My prettiest girl" },
  { title: "Late Night Coffee talks ☕", duration: "4:05", tag: "My favorite notification" },
  { title: "My Butkii's Smile (acoustic)", duration: "2:15", tag: "Certified Cutie" },
];

export default function PlaylistCard() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 max-w-md mx-auto relative select-none">
      
      {/* Title */}
      <div className="text-center mb-8 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Our Soundtrack
        </span>
        <h3 className="font-serif text-2xl font-bold text-gray-800">
          Songs that remind me of you ❤️
        </h3>
        <div className="w-8 h-0.5 bg-pink-400 mx-auto mt-2" />
      </div>

      {/* Playlist Box */}
      <div className="glass-card p-6 md:p-8 rounded-[28px] border border-white/60 shadow-sm flex flex-col gap-6">
        
        {/* Cassette / Vinyl Graphic decoration */}
        <div className="w-full h-32 rounded-2xl bg-gradient-to-tr from-pink-100 to-purple-100 flex items-center justify-between px-6 shadow-inner relative overflow-hidden border border-pink-200/50">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-md" />
          
          <div className="flex flex-col text-left justify-center">
            <span className="text-[9px] font-bold text-pink-400 uppercase tracking-widest leading-none">SIDE A • LOFI</span>
            <h4 className="font-serif text-base font-bold text-pink-600 mt-1.5 leading-tight">
              Anniversary Mix
            </h4>
            <span className="text-[10px] text-zinc-500 font-medium mt-0.5">5 tracks • 15 mins</span>
          </div>

          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xs border border-pink-200/40 relative">
            <Music className="text-pink-400 animate-spin duration-[10s]" size={22} />
            <div className="absolute w-4 h-4 rounded-full bg-[#FFF9F5] border border-pink-200/40" />
          </div>
        </div>

        {/* Tracks List */}
        <div className="space-y-3.5">
          {playlist.map((song, idx) => {
            const isPlaying = playingIndex === idx;
            return (
              <div
                key={song.title}
                onClick={() => setPlayingIndex(isPlaying ? null : idx)}
                className="flex items-center justify-between py-1 border-b border-pink-100/30 last:border-b-0 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  {/* Play icon / indicator */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isPlaying ? "bg-pink-400 text-white" : "text-pink-400 hover:bg-pink-100/40"
                  }`}>
                    {isPlaying ? <Headphones size={12} /> : <Play size={10} className="ml-[1.5px]" fill="currentColor" />}
                  </div>

                  <div className="text-left">
                    <p className={`text-xs font-semibold ${isPlaying ? "text-pink-500 font-bold" : "text-zinc-600 group-hover:text-pink-500"}`}>
                      {song.title}
                    </p>
                    <span className="text-[8px] text-zinc-400 uppercase font-bold tracking-wider">{song.tag}</span>
                  </div>
                </div>

                <span className="text-[10px] text-zinc-400 font-bold">{song.duration}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
