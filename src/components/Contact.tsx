import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-100 to-blue-50 relative overflow-hidden">
      {/* Simple decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 opacity-8 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="30" r="8" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="70" cy="50" r="8" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="50" cy="70" r="8" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx="30" cy="50" r="8" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 w-20 h-20 opacity-6 pointer-events-none">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M20 40 L40 20 L60 40 L40 60 Z" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="8" fill="#0ea5e9" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 md:mb-16">
          <p 
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-600 mb-4" 
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Get In Touch
          </p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-slate-800 mb-6" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let's Create Together
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4" 
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            "Ready to bring your creative vision to life? Let's collaborate!"
          </p>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-14 md:mb-16 max-w-2xl mx-auto">
          <a 
            href="mailto:sandeep636764@gmail.com"
            className="group flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-md rounded-lg border border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300 flex-shrink-0">
              <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-blue-600 mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                Email
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800 break-words" style={{ fontFamily: 'var(--font-sans)' }}>
                sandeep636764@gmail.com
              </p>
            </div>
          </a>

          <a 
            href="tel:+918081360931"
            className="group flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-md rounded-lg border border-cyan-200/50 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300 flex-shrink-0">
              <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-cyan-600" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-cyan-600 mb-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                Phone
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-800" style={{ fontFamily: 'var(--font-sans)' }}>
                +91-8081360931
              </p>
            </div>
          </a>
        </div>

        {/* Social links */}
        <div className="mb-16 sm:mb-18 md:mb-20">
          <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] text-blue-600 mb-4 sm:mb-5 md:mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            Connect With Me
          </p>
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
            <a 
              href="https://share.google/5nM0NizAeFm79WqJ3"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/50 hover:border-blue-400/50 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              aria-label="Behance"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-600 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/in/sandeep-kumar-869189333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/50 hover:border-cyan-400/50 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-20 flex justify-center opacity-40">
          <svg viewBox="0 0 200 60" fill="none" className="w-64 h-auto">
            <path d="M20 30 Q60 15 100 30 T180 30" stroke="#3b82f6" strokeWidth="1" fill="none"/>
            <path d="M20 35 Q60 50 100 35 T180 35" stroke="#06b6d4" strokeWidth="1" fill="none"/>
            <circle cx="20" cy="30" r="2.5" fill="#3b82f6"/>
            <circle cx="100" cy="30" r="2.5" fill="#0ea5e9"/>
            <circle cx="180" cy="30" r="2.5" fill="#06b6d4"/>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-300">
        <div className="text-center">
          <p className="text-sm text-slate-600" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2025 Sandeep Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}