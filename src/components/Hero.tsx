import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Simple geometric shapes */}
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 opacity-20">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="25" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
            <circle cx="40" cy="40" r="15" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
            <circle cx="40" cy="40" r="5" fill="#0ea5e9" opacity="0.6" />
          </svg>
        </div>

        <div className="absolute bottom-20 sm:bottom-32 left-4 sm:left-16 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 opacity-30">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 8 L48 24 L32 40 L16 24 Z" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.6" />
            <circle cx="32" cy="24" r="6" fill="#0ea5e9" fillOpacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-1/4 right-1/4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 opacity-15 hidden md:block">
          <svg viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" stroke="#3b82f6" strokeWidth="1" rx="8" opacity="0.5" />
            <circle cx="24" cy="24" r="6" fill="#06b6d4" fillOpacity="0.3" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 max-w-5xl mx-auto">
          {/* Eyebrow tag */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/80 backdrop-blur-md rounded-full border border-blue-200/50 shadow-lg">
              <div className="flex gap-1">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-500" />
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cyan-500" />
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-sky-500" />
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-600" style={{ fontFamily: 'var(--font-sans)' }}>
                Creative Design Portfolio
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-700 bg-clip-text text-transparent px-2 sm:px-4 leading-tight"
              style={{ fontFamily: 'var(--font-calligraphy)', fontWeight: 600 }}
            >
              Sandeep Kumar
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
              <div className="h-px w-6 sm:w-8 md:w-12 bg-gradient-to-r from-transparent to-blue-400/50" />
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Creative Designer
              </p>
              <div className="h-px w-6 sm:w-8 md:w-12 bg-gradient-to-l from-transparent to-cyan-400/50" />
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl mx-auto px-3 sm:px-4 pb-6 sm:pb-8">
            <div className="relative py-3 sm:py-4">
              {/* Quote marks decoration */}
              <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 text-3xl sm:text-4xl md:text-5xl text-blue-400/30 leading-none hidden sm:block" style={{ fontFamily: 'var(--font-serif)' }}>
                "
              </div>
              <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 text-3xl sm:text-4xl md:text-5xl text-cyan-400/30 leading-none hidden sm:block" style={{ fontFamily: 'var(--font-serif)' }}>
                "
              </div>
              
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed px-2 sm:px-4 md:px-8 max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Transforming ideas into stunning visual experiences through innovative design and creative storytelling.
              </p>
            </div>
          </div>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-blue-400/50 to-cyan-400/50" />
            <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-l from-transparent via-cyan-400/50 to-blue-400/50" />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 group cursor-pointer z-20"
        >
          <p 
            className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-slate-500 group-hover:text-blue-500 transition-colors" 
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Scroll to explore
          </p>
          
          <div className="relative">
            {/* Icon */}
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-blue-400/40 group-hover:border-blue-500 transition-colors">
              <ChevronDown 
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500" 
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Vertical line */}
          <div className="relative w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-blue-400/40 to-transparent" />
        </button>
      </div>
    </section>
  );
}