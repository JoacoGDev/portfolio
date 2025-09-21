import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

const ProjectCard = ({ project, reversed = false }: ProjectCardProps) => {
  return (
    <article
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-center md:items-stretch gap-8 md:gap-10 max-w-5xl mx-auto`}
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative group w-72 sm:w-80 md:w-88 overflow-hidden rounded-xl shadow-lg dark:shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm dark:shadow-md text-gray-700 dark:text-gray-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Botones */}
        <footer className="flex justify-center md:justify-start gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            💻 Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            🚀 Demo
          </a>
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
