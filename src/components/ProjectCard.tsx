import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

const ProjectCard = ({ project, reversed = false }: ProjectCardProps) => {
  return (
    <article className="group relative max-w-6xl mx-auto">
      {/* Background Card Container */}
      <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-xl shadow-gray-900/5 dark:shadow-black/10 p-8 lg:p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:border-blue-200/50 dark:hover:border-blue-700/50">
        
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-400/10 dark:via-transparent dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
        
        <div className={`relative flex flex-col lg:flex-row ${
          reversed ? "lg:flex-row-reverse" : ""
        } items-center gap-8 lg:gap-12`}>
          
          {/* Image Section - Reduced Size */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative group/image">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm shadow-xl shadow-gray-900/10 dark:shadow-black/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20 hover:scale-105 transform">
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Main Image - Smaller Height */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12"></div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 -rotate-12"></div>
            </div>
          </div>

          {/* Content Section - More Space */}
          <div className="w-full lg:w-3/5 space-y-6">
            
            {/* Project Header */}
            <div className="space-y-3">
              {/* Project Number/Type */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold rounded-full border border-blue-200/50 dark:border-blue-700/50">
                  PROYECTO
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent"></div>
              </div>
              
              {/* Project Title - Blue */}
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-mono bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-2xl">
              {project.description}
            </p>

            {/* Technologies - Compact Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Stack Tecnológico
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                {project.technologies.slice(0, 6).map((tech, index) => (
                  <span
                    key={tech}
                    className="group/tech relative px-3 py-2 text-xs font-medium text-center rounded-lg bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-400/10 dark:to-cyan-400/10 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative font-mono">{tech}</span>
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="px-3 py-2 text-xs font-medium text-center rounded-lg bg-blue-200/80 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 border border-blue-300/50 dark:border-blue-600/50">
                    +{project.technologies.length - 6}
                  </span>
                )}
              </div>
            </div>

            {/* Concepts - Programming Patterns & Architecture */}
            {project.concepts && project.concepts.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Conceptos Aplicados
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {project.concepts.slice(0, 8).map((concept, index) => (
                    <span
                      key={concept}
                      className="group/concept relative px-3 py-2 text-xs font-medium text-center rounded-lg bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400/60 dark:hover:border-purple-500/60 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 hover:-translate-y-1 cursor-default"
                      style={{ animationDelay: `${(index + 6) * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 dark:from-purple-400/10 dark:to-indigo-400/10 rounded-lg opacity-0 group-hover/concept:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative font-mono text-xs">{concept}</span>
                    </span>
                  ))}
                  {project.concepts.length > 8 && (
                    <span className="px-3 py-2 text-xs font-medium text-center rounded-lg bg-purple-200/80 dark:bg-purple-800/30 text-purple-800 dark:text-purple-300 border border-purple-300/50 dark:border-purple-600/50">
                      +{project.concepts.length - 8}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons - Sleeker Design */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              {/* GitHub Button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center justify-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-xl font-semibold font-mono text-sm transition-all duration-300 hover:border-gray-400/60 dark:hover:border-gray-600/60 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-black/20 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-700/20 dark:to-gray-800/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative">Código</span>
              </a>

              {/* Demo Button */}
              { project.demoUrl && <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/demo relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-xl font-semibold font-mono text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-4 h-4 transition-transform duration-300 group-hover/demo:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="relative">Demo</span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -top-[2px] -bottom-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover/demo:translate-x-full transition-transform duration-1000 ease-out"></div>
              </a>}
            </div>

            {/* Status Indicators */}
            {project.demoUrl && <div className="flex items-center gap-4 pt-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Activo</span>
              </div>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
               <span>Demo disponible</span>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;