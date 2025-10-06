import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button after scrolling down 400px
      setIsVisible(currentScrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-lg border border-slate-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 group flex items-center justify-center"
      aria-label="Scroll to top"
    >
      {/* Gradient overlay on hover */}
      <span className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      
      {/* Icon */}
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300 relative z-10" strokeWidth={2.5} />
    </button>
  );
}