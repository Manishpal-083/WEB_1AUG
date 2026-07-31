import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface BucketItem {
  id: string;
  text: string;
}

const defaultItems: BucketItem[] = [
  { id: "1", text: "Long Drive 🚗" },
  { id: "2", text: "Ice Cream Date 🍦" },
  { id: "3", text: "Sunset Together 🌅" },
  { id: "4", text: "Watch Rain Together 🌧️" },
  { id: "5", text: "Late Night Walk 🌙" },
  { id: "6", text: "Movie Marathon with sek suk eheheh 🍿" },
  { id: "7", text: "Build Our Dream Home and again sek suk🏡" },
  { id: "8", text: "Grow Old Together ❤️" },
];

export default function BucketList() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("guddoo_bucket_list");
    if (saved) {
      setCheckedIds(JSON.parse(saved));
    }
  }, []);

  const toggleCheck = (id: string) => {
    let updated: string[];
    if (checkedIds.includes(id)) {
      updated = checkedIds.filter((item) => item !== id);
    } else {
      updated = [...checkedIds, id];
    }
    setCheckedIds(updated);
    localStorage.setItem("guddoo_bucket_list", JSON.stringify(updated));
  };

  return (
    <section className="py-16 px-6 max-w-md mx-auto relative select-none">
      
      {/* Title */}
      <div className="text-center mb-8 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Our Adventures
        </span>
        <h3 className="font-serif text-2xl font-bold text-gray-800">
          Future Bucket List 🗺️
        </h3>
        <div className="w-8 h-0.5 bg-pink-400 mx-auto mt-2" />
      </div>

      {/* List container */}
      <div className="glass-card p-6 md:p-8 rounded-[28px] border border-white/60 shadow-sm space-y-4">
        {defaultItems.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className="flex items-center gap-3.5 cursor-pointer py-1 select-none group"
            >
              {/* Checkbox circle */}
              <div 
                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isChecked 
                    ? "bg-pink-400 border-pink-400 text-white shadow-sm" 
                    : "border-pink-300/60 bg-white/70 group-hover:border-pink-400"
                }`}
              >
                {isChecked && <Check size={14} strokeWidth={3} />}
              </div>

              {/* Text */}
              <span 
                className={`font-sans text-sm font-semibold transition-all duration-350 ${
                  isChecked 
                    ? "line-through text-zinc-400/85" 
                    : "text-zinc-600 group-hover:text-pink-500"
                }`}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
