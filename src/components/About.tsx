import profileImage from "figma:asset/e93b494d225d51100aecd8c6497f1dc533b7798a.png";

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute top-6 sm:top-10 right-4 sm:right-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 opacity-5">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="30" r="8" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="70" cy="50" r="8" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="50" cy="70" r="8" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx="30" cy="50" r="8" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-10 sm:bottom-16 left-4 sm:left-8 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 opacity-5">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M20 40 L40 20 L60 40 L40 60 Z" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="8" fill="#0ea5e9" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Profile Image */}
          <div className="relative flex items-center justify-center order-2 lg:order-1 py-6 sm:py-8">
            <div className="relative z-10">
              {/* Main profile image */}
              <div 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
                style={{
                  boxShadow: '0 25px 60px rgba(59, 130, 246, 0.15), 0 15px 35px rgba(6, 182, 212, 0.1)'
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Sandeep Kumar - Creative Designer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 backdrop-blur-sm flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>

              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500 to-blue-500 backdrop-blur-sm flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            <div>
              <p 
                className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-blue-600 mb-3 sm:mb-4" 
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                About Me
              </p>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-3 sm:mb-4 leading-tight" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Creative Designer & Visual Storyteller
              </h2>
            </div>
            
            <div className="h-px bg-gradient-to-r from-blue-400 via-cyan-400 to-transparent" />
            
            <div 
              className="space-y-4 sm:space-y-5 text-slate-600" 
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Hi, I'm <span className="text-slate-800 font-bold text-base sm:text-lg lg:text-xl" style={{ fontFamily: 'var(--font-serif)' }}>Sandeep Kumar</span>, a passionate <span className="font-semibold text-slate-700">Creative Designer</span> dedicated to transforming ideas into compelling visual experiences.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                I specialize in crafting distinctive brand identities, innovative UI/UX designs, engaging digital content, and unique illustrations that help businesses stand out and connect with their audience.
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                With expertise in modern design tools and a commitment to excellence, I bring together clean aesthetics and strategic thinking to create designs that are not just beautiful, but purposeful and impactful.
              </p>
            </div>

            {/* Skills highlight */}
            <div className="pt-4 sm:pt-5 md:pt-6">
              <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] text-slate-500 mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                Design Tools & Expertise
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Figma', 'Adobe Creative Suite', 'Sketch', 'Framer', 'Webflow', 'Principle'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-br from-white to-slate-50 border border-blue-200 rounded-full text-xs sm:text-sm text-slate-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:border-blue-400"
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontWeight: 500,
                      boxShadow: 'hover:0 4px 12px rgba(59, 130, 246, 0.15)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
