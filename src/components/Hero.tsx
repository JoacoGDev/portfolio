import Title from "./Title";
import TextLine from "./TextLine";
import Photo from "./Photo";
import fotoJoaco from "../assets/fotoJoaco-removebg-preview.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import cvEs from "../assets/Joaquín_Gil_Full_Stack_Esp.pdf";
import cvEn from "../assets/Joaquin_Gil_Full_Stack_Eng.pdf";
import { Button } from "./Button";
import { cn } from "../utils/cn";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-16 gap-12 lg:gap-20 pt-24 pb-12"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Content Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl mx-auto w-full gap-12 lg:gap-20">
        {/* Text Content - Left Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl space-y-8 relative">
          {/* Status Badge */}
          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm text-green-700 dark:text-green-300 text-sm font-medium border border-green-200/50 dark:border-green-700/50">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Disponible para trabajar
          </div>

          {/* Title */}
          <div className="space-y-4">
            <Title
              text="Hola, soy Joaco"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent leading-tight"
            />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-400 font-mono">
                Desarrollador{" "}
                <span className="relative font-semibold text-blue-600 dark:text-blue-400">
                  Full-Stack
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"></div>
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <TextLine
            text="Apasionado por crear soluciones digitales innovadoras desde Uruguay. Transformo ideas en experiencias web excepcionales."
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl"
          />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Spanish CV */}
              <Button
                as="a"
                href={cvEs}
                download="Joaquín_Gil_Full_Stack_Esp.pdf"
                variant="primary"
                size="lg"
                className={cn(
                  "group inline-flex items-center gap-3",
                  "sm:mr-2"
                )}
              >
                <span className="flex items-center gap-2">
                  <span>CV</span>
                  <span className="text-xs opacity-80">(ES)</span>
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Button>

              {/* English CV */}
              <Button
                as="a"
                href={cvEn}
                download="Joaquin_Gil_Full_Stack_Eng.pdf"
                variant="primary"
                size="lg"
                className={cn(
                  "group inline-flex items-center gap-3",
                  "bg-gradient-to-r from-indigo-600 to-violet-600"
                )}
              >
                <span className="flex items-center gap-2">
                  <span>CV</span>
                  <span className="text-xs opacity-80">(EN)</span>
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Button>
            </div>

            <Button
              variant="secondary"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('projects');
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
              className="group inline-flex items-center gap-3"
            >
              <span className="text-lg">👀</span>
              <span>Ver Proyectos</span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 font-mono">Sígueme:</div>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, label: "GitHub", href: "https://github.com/JoacoGDev" },
                { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joaquingilp/" },
              ].map((social, index) => {
                const Icon = social.icon; // instanciamos el componente
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 border border-white/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Icon className="text-lg" /> {/* renderizamos el icono */}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Photo - Right Side */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Photo Container */}
            <Photo
              img={fotoJoaco}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl shadow-2xl shadow-gray-900/20 dark:shadow-black/40 object-cover transition-all duration-500 group-hover:scale-105 border-4 border-white/50 dark:border-gray-800/50 backdrop-blur-sm"
            />

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg animate-bounce delay-500">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-indigo-500 dark:bg-indigo-400 rounded-full shadow-lg animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;