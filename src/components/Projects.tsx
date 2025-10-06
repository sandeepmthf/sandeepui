import { useState } from "react";
import { projects, categories, getProjectsByCategory } from "../data/projectsData";

interface ProjectsProps {
  onProjectClick: (id: number) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Simple decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 opacity-8 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="30" cy="30" r="8" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="70" cy="30" r="8" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="30" cy="70" r="8" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx="70" cy="70" r="8" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-32 left-16 w-20 h-20 opacity-6 pointer-events-none">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M20 40 L40 20 L60 40 L40 60 Z" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="8" fill="#0ea5e9" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p 
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-600 mb-4" 
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Featured Work
          </p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-slate-800 mb-6" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Creative Projects
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto" 
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            "A collection of projects that showcase creativity, strategy, and craftsmanship"
          </p>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                activeCategory === category.slug
                  ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600'
                  : 'bg-white/80 text-slate-700 border border-slate-300 hover:border-blue-400 hover:shadow-md hover:bg-blue-50'
              }`}
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Project Info */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span 
                    className="text-[10px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full" 
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      backgroundColor: `${project.color}20`,
                      color: project.color 
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500" style={{ fontFamily: 'var(--font-sans)' }}>
                    {project.year}
                  </span>
                </div>
                <h3 
                  className="text-base sm:text-lg md:text-xl text-slate-800 mb-2 group-hover:text-blue-600 transition-colors leading-tight" 
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3" 
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 md:mt-20">
          <p 
            className="text-base text-slate-600 mb-6" 
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            "Interested in working together? Let's create something amazing!"
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}