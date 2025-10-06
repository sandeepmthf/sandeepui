import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navbar only when in Hero section
      setIsVisible(currentScrollY < heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-full border border-slate-200/50 shadow-lg px-4 sm:px-6 py-2.5 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span 
                className="text-slate-800 text-sm sm:text-base lg:text-lg truncate"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Sandeep Kumar
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}