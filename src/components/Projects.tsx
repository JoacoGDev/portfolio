import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
        Proyectos
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
          >
            {/* Imagen */}
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
