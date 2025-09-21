
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
    

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white">
          Proyectos Destacados
        </h2>

        {/* Tarjetas */}
        <div className="flex flex-col gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default Projects;
