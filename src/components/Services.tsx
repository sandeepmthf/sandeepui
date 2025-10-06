
import { 
  LogoBrandIllustration, 
  PackagingIllustration, 
  SocialMediaIllustration, 
  CustomArtworkIllustration, 
  MerchandiseIllustration,
  UIUXIllustration 
} from "./ServiceIllustrations";


export default function Services() {
  const services = [
    {
      illustration: LogoBrandIllustration,
      title: "Logo Design & Brand Identity",
      description: "Creating distinctive logos and comprehensive brand systems that capture your unique essence and resonate with your audience.",
      color: "#6B9BD1"
    },
    {
      illustration: UIUXIllustration,
      title: "UI/UX Design",
      description: "Designing intuitive, user-centered interfaces for websites and mobile apps that deliver seamless experiences and drive engagement.",
      color: "#4A90E2"
    },
    {
      illustration: PackagingIllustration,
      title: "Packaging Design",
      description: "Eye-catching packaging solutions that make your products stand out on shelves while maintaining brand consistency.",
      color: "#E49393"
    },
    {
      illustration: SocialMediaIllustration,
      title: "Social Media Creatives",
      description: "Engaging ads, banners, and posts optimized for social platforms to boost your digital presence.",
      color: "#9B8EC9"
    },
    {
      illustration: CustomArtworkIllustration,
      title: "Illustrations & Custom Artwork",
      description: "Original illustrations and visual elements tailored to your brand story and communication needs.",
      color: "#16A085"
    },
    {
      illustration: MerchandiseIllustration,
      title: "Print & Merchandise Design",
      description: "T-shirts, posters, covers, and more — designs that translate perfectly to physical products.",
      color: "#E74C3C"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Simple background decorative elements */}
      <div className="absolute top-6 sm:top-10 right-4 sm:right-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 opacity-8 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="30" cy="30" r="8" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="70" cy="30" r="8" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="30" cy="70" r="8" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx="70" cy="70" r="8" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-14 sm:bottom-20 left-4 sm:left-10 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 opacity-6 pointer-events-none">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M20 40 L40 20 L60 40 L40 60 Z" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="8" fill="#0ea5e9" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-blue-600 mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            What I Do
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
            <div className="h-px w-12 sm:w-14 md:w-16 bg-gradient-to-r from-transparent to-blue-400/50" />
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cyan-500" />
            <div className="h-px w-12 sm:w-14 md:w-16 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-slate-200 hover:border-blue-300/50 hover:shadow-xl transition-all duration-200 relative overflow-hidden hover:-translate-y-1"
            >
              {/* Illustration at the top */}
              <div className="mb-3 sm:mb-4 md:mb-6 -mx-4 sm:-mx-5 md:-mx-6 lg:-mx-8 -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-8 px-4 sm:px-5 md:px-6 lg:px-8 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-3 sm:pb-4 bg-gradient-to-br from-white to-gray-50/30">
                <div className="w-full h-24 sm:h-28 md:h-32 lg:h-40 flex items-center justify-center">
                  <service.illustration className="w-full h-full" />
                </div>
              </div>
              
              <h3 
                className="text-base sm:text-lg md:text-xl text-[#2c3e50] mb-2 sm:mb-3 leading-tight" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-xs sm:text-sm md:text-base text-[#4a5568] leading-relaxed" 
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {service.description}
              </p>

              {/* Decorative accent */}
              <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-[#f3f4f6]">
                <div 
                  className="w-6 sm:w-7 md:w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-12 sm:group-hover:w-14 md:group-hover:w-16" 
                  style={{ backgroundColor: service.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
