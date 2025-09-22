import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

const ProjectCard = ({ project, reversed = false }: ProjectCardProps) => {
  return (
    <article className={`group relative max-w-7xl mx-auto`}>
      <div className={`relative flex flex-col lg:flex-row ${
        reversed ? "lg:flex-row-reverse" : ""
      } items-center gap-12 lg:gap-16 p-8 lg:p-12`}>
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative group/image">
            {/* Image Container with Advanced Effects */}
            <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-2xl shadow-gray-900/10 dark:shadow-black/20 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20 border border-white/20 dark:border-gray-700/50">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Main Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Floating Action Indicator */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 border border-white/40 dark:border-gray-700/40">
                <span className="text-2xl">👁️</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Stack Tecnológico
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="group/tech relative px-4 py-2 text-sm font-medium rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-0.5 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center justify-center gap-3 px-8 py-4 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-white/40 dark:border-gray-700/40 rounded-xl font-semibold transition-all duration-300 hover:border-gray-300/60 dark:hover:border-gray-600/60 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-black/20 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-100/20 dark:from-gray-700/20 dark:to-gray-800/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xl">💻</span>
              <span className="relative">Ver Código</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Demo Button */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/demo relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xl">🚀</span>
              <span className="relative">Demo en Vivo</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-300 group-hover/demo:translate-x-1 group-hover/demo:-translate-y-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;