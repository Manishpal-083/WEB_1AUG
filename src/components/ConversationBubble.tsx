import { motion } from "framer-motion";

interface ChatMessage {
  sender: "me" | "her";
  text: string;
  time: string;
}

const chats: ChatMessage[] = [
  { sender: "me", text: "I miss you 🥺", time: "11:11 PM" },
  { sender: "her", text: "Pagal ❤️", time: "11:12 PM" },
  { sender: "me", text: "Meri Champudii.", time: "11:12 PM" },
  { sender: "her", text: "Hmmmm.", time: "11:13 PM" },
  { sender: "me", text: "Love you.", time: "11:14 PM" },
  { sender: "her", text: "Thoda sa.", time: "11:14 PM" },
];

export default function ConversationBubble() {
  return (
    <section className="py-16 px-6 max-w-md mx-auto relative select-none">
      
      {/* Header card info */}
      <div className="bg-gradient-to-r from-pink-300 to-pink-400 p-4 rounded-t-[24px] shadow-sm flex items-center justify-between border-b border-pink-200 select-none">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-lg font-bold shadow-2xs">
            🌸
          </div>
          <div className="text-left">
            <h4 className="font-sans text-xs font-bold text-white leading-none">
              Champudii ❤️
            </h4>
            <span className="text-[9px] text-pink-100 font-semibold uppercase tracking-wider mt-0.5 inline-block">
              Online
            </span>
          </div>
        </div>
        <span className="text-white/60 text-xs">📞 🎥</span>
      </div>

      {/* Chat bubbles container */}
      <div className="glass-card p-5 rounded-b-[24px] border-t-0 border-white/60 shadow-xs space-y-4 max-h-[360px] overflow-y-auto bg-gradient-to-b from-[#FFFDF9] to-pink-50/10">
        
        {chats.map((chat, idx) => {
          const isMe = chat.sender === "me";
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.18 }}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[75%] p-3 rounded-2xl text-xs font-semibold leading-relaxed shadow-3xs relative ${
                  isMe 
                    ? "bg-gradient-to-tr from-pink-400 to-[#FF8DA1] text-white rounded-tr-xs" 
                    : "bg-white text-zinc-700 border border-gray-150 rounded-tl-xs"
                }`}
              >
                {/* Bubble tail decorations */}
                <div 
                  className={`absolute top-0 w-3 h-3 ${
                    isMe 
                      ? "right-[-4px] bg-[#FF8DA1] clip-path-me" 
                      : "left-[-4px] bg-white border-l border-t border-gray-150 clip-path-her"
                  }`} 
                />

                <p>{chat.text}</p>
                <span className={`text-[8px] block text-right mt-1 opacity-70 ${isMe ? "text-white/90" : "text-zinc-400"}`}>
                  {chat.time}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
