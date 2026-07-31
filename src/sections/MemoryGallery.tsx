import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { triggerEasterEgg } from "@/components/EasterEggs";

// ==========================================
// 📸 HOW THESE PHOTOS ARE LOADED:
// ==========================================
// - photo4.jpg matches Image 2 (Winking, white sunglasses)
// - photo5.jpg matches Image 5 (Elegant white blouse portrait)
// ==========================================

import photo4 from "@/assets/images/photo4.jpg";
import photo5 from "@/assets/images/photo5.jpg";

interface MemoryPhoto {
  src: string;
  title: string;
  caption: string;
  tag: string;
  rotation: number;
}

const memoryPhotos: MemoryPhoto[] = [
  {
    src: photo4,
    title: "My Cute Butkii",
    caption: "Faguniyaa winking with her sunglasses on head 😂. Literally the cutest human.",
    tag: "My Champudii ❤️",
    rotation: -4
  },
  {
    src: photo5,
    title: "My Prettiest Champaa",
    caption: "Looking absolutely gorgeous. No words explain how lucky I am to have you.",
    tag: "My safe place.",
    rotation: 5
  }
];

export default function MemoryGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleOpen = (idx: number) => {
    setActiveIndex(idx);
    setZoomScale(1);
    triggerEasterEgg("Photo", "You found the Gallery Egg! Looking absolutely gorgeous, my prettiest Champaa ❤️");
  };

  const handleClose = () => {
    setActiveIndex(null);
    setZoomScale(1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev !== null && prev < memoryPhotos.length - 1 ? prev + 1 : 0));
    setZoomScale(1);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : memoryPhotos.length - 1));
    setZoomScale(1);
  };

  const handleToggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => (prev === 1 ? 1.6 : 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;

    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
  };

  const activePhoto = activeIndex !== null ? memoryPhotos[activeIndex] : null;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto relative select-none">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-2">
        <span className="text-pink-500/80 text-xs font-bold tracking-widest uppercase">
          Precious Memories
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
          Memory Gallery 🌸
        </h2>
        <div className="w-10 h-0.5 bg-pink-400 mx-auto mt-3" />
      </div>

      {/* Scrapbook Board Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-14 overflow-visible py-6">
        {memoryPhotos.map((photo, idx) => (
          <motion.div
            key={photo.title}
            initial={{ opacity: 0, y: 20, rotate: photo.rotation * 1.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.04,
              rotate: 0,
              y: -8,
              boxShadow: "0 15px 35px rgba(255, 182, 193, 0.18)",
              zIndex: 10
            }}
            onClick={() => handleOpen(idx)}
            className="bg-white p-4 pb-7 rounded-lg shadow-xs border border-gray-150 flex flex-col items-center gap-4 cursor-pointer w-[280px] md:w-[310px] transform select-none relative overflow-visible"
          >
            {/* Scrapbook Tape effect */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-7 bg-pink-100/50 backdrop-blur-xs rotate-[-3deg] border-l border-r border-dashed border-pink-200/40 shadow-3xs pointer-events-none" />

            {/* Photo box */}
            <div className="w-full aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden border border-gray-200/80">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Polaroid handwritten captions */}
            <div className="text-center space-y-1">
              <span className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">
                {photo.tag}
              </span>
              <h3 className="font-cursive text-2xl text-pink-600 font-bold leading-none">
                {photo.title}
              </h3>
              <p className="font-sans text-[11px] text-gray-500 font-medium px-2 leading-relaxed mt-1">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/75 p-4 cursor-zoom-out"
            onClick={handleClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top bar */}
            <div className="absolute top-6 inset-x-6 flex items-center justify-between z-[10000] select-none">
              <span className="font-serif text-sm text-white/80 italic">
                {activePhoto.title}
              </span>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleToggleZoom}
                  className="text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full cursor-pointer transition-colors"
                >
                  {zoomScale === 1 ? <ZoomIn size={16} /> : <ZoomOut size={16} />}
                </button>
                <button
                  onClick={handleClose}
                  className="text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full cursor-pointer transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Slider arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-all z-20 hidden md:block"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-all z-20 hidden md:block"
            >
              <ChevronRight size={20} />
            </button>

            {/* Polaroid Lightbox View */}
            <motion.div
              initial={{ scale: 0.93, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 15 }}
              transition={{ type: "spring", stiffness: 125, damping: 22 }}
              className="bg-white p-4 pb-7 rounded-xl shadow-2xl flex flex-col items-center gap-4 max-w-sm w-full max-h-[75vh] overflow-hidden select-none cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden border border-gray-150 relative">
                <motion.img
                  animate={{ scale: zoomScale }}
                  transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className={`w-full h-full object-cover origin-center ${
                    zoomScale > 1 ? "cursor-grab active:cursor-grabbing" : ""
                  }`}
                  drag={zoomScale > 1}
                  dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
                />
              </div>

              <p className="font-cursive text-2xl text-pink-600 font-bold">
                {activePhoto.title}
              </p>
              <p className="font-sans text-xs text-gray-500 font-semibold px-2 text-center leading-relaxed">
                {activePhoto.caption}
              </p>

              <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block md:hidden select-none mt-1">
                👈 Swipe to browse 👉
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
