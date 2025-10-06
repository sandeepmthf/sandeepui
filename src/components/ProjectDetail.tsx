import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getProjectById, projects } from "../data/projectsData";

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-slate-800 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Project not found
          </p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span 
                className="px-4 py-2 rounded-full text-sm uppercase tracking-wider"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: `${project.color}20`,
                  color: project.color 
                }}
              >
                {project.category}
              </span>
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  {project.year}
                </span>
              </div>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl text-slate-800 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {project.title}
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {project.description}
            </p>
          </div>

          {/* Main Project Image */}
          <div className="relative mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 
                  className="text-2xl sm:text-3xl text-slate-800 mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  The Challenge
                </h2>
                <p 
                  className="text-base sm:text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 
                  className="text-2xl sm:text-3xl text-slate-800 mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  The Solution
                </h2>
                <p 
                  className="text-base sm:text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.solution}
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h2 
                  className="text-2xl sm:text-3xl text-slate-800 mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  The Outcome
                </h2>
                <p 
                  className="text-base sm:text-lg text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.outcome}
                </p>
              </div>

              {/* Additional Images */}
              {project.images && project.images.length > 1 && (
                <div>
                  <h2 
                    className="text-2xl sm:text-3xl text-slate-800 mb-8"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Project Gallery
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <div 
                        key={index}
                        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tags */}
              <div>
                <h3 
                  className="text-lg text-slate-800 mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  <Tag className="w-5 h-5 inline mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 
                  className="text-lg text-slate-800 mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-slate-500" style={{ fontFamily: 'var(--font-sans)' }}>
                      Category
                    </span>
                    <p className="text-slate-800" style={{ fontFamily: 'var(--font-sans)' }}>
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500" style={{ fontFamily: 'var(--font-sans)' }}>
                      Year
                    </span>
                    <p className="text-slate-800" style={{ fontFamily: 'var(--font-sans)' }}>
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-2xl sm:text-3xl text-slate-800 text-center mb-12"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              More Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group cursor-pointer bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className="text-xs uppercase tracking-wider px-2 py-1 rounded-full"
                        style={{ 
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: `${relatedProject.color}20`,
                          color: relatedProject.color 
                        }}
                      >
                        {relatedProject.category}
                      </span>
                      <span className="text-xs text-slate-500" style={{ fontFamily: 'var(--font-sans)' }}>
                        {relatedProject.year}
                      </span>
                    </div>
                    <h3 
                      className="text-lg text-slate-800 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {relatedProject.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}