import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "our-story", label: "Our Story" },
  { id: "why-special", label: "Why Special" },
  { id: "gallery", label: "Gallery" },
  { id: "love-letter", label: "Letter" },
  { id: "fun-corner", label: "Fun Corner" },
  { id: "countdown", label: "Countdown" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Monitor Scroll to change Navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. High-Performance IntersectionObserver to track active nav links
  useEffect(() => {
    const observers = navItems.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { 
          rootMargin: "-25% 0px -55% 0px", // triggers when section is dominant in viewport
          threshold: 0.1 
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  // 3. Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    // Use Lenis smooth scrolling instance if mounted
    if ((window as any).lenisInstance) {
      (window as any).lenisInstance.scrollTo(el, { offset: -70 });
    } else {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-305 select-none ${
          scrolled 
            ? "bg-white/70 backdrop-blur-md border-b border-pink-100/30 shadow-xs py-3.5" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Link back to top */}
          <button
            onClick={() => handleNavClick("hero")}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 font-serif text-lg font-bold text-pink-600 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-pink-400 focus-visible:outline-offset-4 rounded-md transition-all cursor-pointer"
          >
            <Heart size={18} fill="currentColor" className="animate-heart-beat" />
            <span>Champudii</span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`relative font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-pink-400 focus-visible:outline-offset-4 py-2 px-1 rounded-sm ${
                    activeSection === item.id 
                      ? "text-pink-600" 
                      : "text-zinc-500 hover:text-pink-400"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 inset-x-1 h-0.5 bg-pink-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger toggle button - 44px min target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
            className="md:hidden w-11 h-11 flex items-center justify-center text-zinc-650 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-pink-400 rounded-full cursor-pointer z-50"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden"
            />

            {/* Sliding Drawer */}
            <motion.div
              id="mobile-nav-menu"
              role="dialog"
              aria-label="Mobile Navigation Links"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[260px] bg-white/95 backdrop-blur-md z-45 shadow-2xl md:hidden flex flex-col pt-24 px-8 select-none"
            >
              <ul className="flex flex-col gap-6 text-left">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left font-serif text-lg font-bold transition-all cursor-pointer py-2 border-b border-pink-50/60 focus-visible:outline-2 focus-visible:outline-pink-400 ${
                        activeSection === item.id 
                          ? "text-pink-600 pl-2 border-pink-200" 
                          : "text-zinc-650 hover:text-pink-500 pl-0"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
