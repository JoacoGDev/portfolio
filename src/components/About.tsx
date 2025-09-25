const About = () => {



const skills = [
  { name: "Resolución de Problemas", color: "from-purple-500 to-indigo-500" },
  { name: "Pensamiento Crítico & Diseño de Soluciones", color: "from-blue-500 to-cyan-500" },
  { name: "Adaptabilidad Técnica", color: "from-green-500 to-emerald-500" },
  { name: "Uso Estratégico de IA", color: "from-pink-500 to-rose-500" },
  { name: "Comunicación en Inglés", color: "from-orange-500 to-red-500" },
  { name: "Aprendizaje Continuo & Rápido", color: "from-teal-500 to-cyan-500" },
  { name: "Colaboración & Trabajo en Equipo", color: "from-yellow-500 to-amber-500" },
  { name: "Gestión del Cambio", color: "from-fuchsia-500 to-purple-500" },
];


  const techStack = {
    frontend: ["React", "TypeScript", "CSS", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Express", "SQL Server", "SQLite", "Java", "Typescript", "JavaScript", "C#", ".Net", "Entity Framework", "Swing", "Ionic"],
    tools: ["Git", "Swagger", "Postman"]
  };

// Stats más variados y representativos
const stats = [
  { number: "+2", label: "Años de Código", icon: "💻" },
  { number: "∞", label: "Cafés", icon: "☕" },
  { number: "∞", label: "Curiosidad", icon: "🧠" },
  { number: "100%", label: "Dedicación", icon: "💪" },
];

  const interests = [
    {
      icon: "🔍",
      title: "Análisis de Problemas",
      desc: "Entender antes de resolver",
    },
    { 
      icon: "🛠️", 
      title: "Desarrollo Integral", 
      desc: "De la idea al producto final" 
    },
    { 
      icon: "🤖", 
      title: "IA & Automatización", 
      desc: "Potenciando el desarrollo" 
    },
    {
      icon: "🌱",
      title: "Crecimiento Continuo",
      desc: "Siempre aprendiendo",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200/50 dark:border-blue-700/50">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Sobre Mí
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent mb-6 leading-tight">
            Desarrollador
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light">
              Full-Stack
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Apasionado por crear experiencias digitales excepcionales desde
            Montevideo, Uruguay. Combino creatividad y tecnología para dar vida
            a ideas innovadoras.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            {/* Personal Story Card */}
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-xl shadow-gray-900/5 dark:shadow-black/10 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-400/10 dark:via-transparent dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

              <div className="relative space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
                    Mi Historia
                  </h3>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    Soy{" "}
                    <span className="font-semibold">
                      estudiante de Analista en Tecnologías de la Información en
                      ORT
                    </span>
                    , tengo 21 años y soy de Montevideo, Uruguay. Actualmente me
                    encuentro preparando el {""}
                    <span className="font-semibold">
                      proyecto final de carrera
                    </span>
                    , el cierre de un camino que comencé hace más de 2 años,
                    cuando descubrí la magia de transformar ideas en
                    aplicaciones que pueden mejorar la vida de las personas.
                  </p>
                  <p>
                    Me gusta trabajar en proyectos full-stack, uniendo
                    interfaces claras y usables con arquitecturas sólidas. En
                    cada desafío busco elegir las{" "}
                    <span className="font-semibold">
                      tecnologías más apropiadas para el problema a resolver
                    </span>
                    , priorizando siempre la simplicidad y el valor real de la
                    solución.
                  </p>
                  <p>
                    Fuera del mundo del código, disfruto leer, practicar piano y
                    compartir un buen café mientras pienso en lo que quiero
                    construir a continuación.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  <div className="relative">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

             {/* Interests Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  <div className="relative">
                    <div className="text-3xl mb-3">{interest.icon}</div>
                    <h4 className="font-semibold font-mono text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {interest.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-xl shadow-gray-900/5 dark:shadow-black/10 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-400/10 dark:via-transparent dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
                    Habilidades Clave
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Core Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono mb-6">
                      Capacidades Principales
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <span
                          key={skill.name}
                          className={`group/skill relative px-5 py-3 text-sm font-mono font-medium rounded-xl shadow-lg bg-gradient-to-r ${skill.color} text-white hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 ease-out"></div>

                          {/* Content */}
                          <span className="relative z-10">{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Familiarity */}
                  <div className="bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      Stack Tecnológico Familiar
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-mono mb-4 italic">
                      "Herramientas con las que he trabajado."
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[...techStack.frontend, ...techStack.backend, ...techStack.tools].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 text-xs font-mono bg-gray-100/80 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Philosophy */}
                  <div className="bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-pink-50/50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-indigo-200/30 dark:border-indigo-700/30">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Mi Enfoque</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          Me adapto rápidamente a nuevas herramientas y tecnologías según las necesidades del proyecto.
                          Mi fortaleza está en analizar problemas, diseñar soluciones efectivas y usar la tecnología
                          más adecuada para cada desafío.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("projects");
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: "smooth",
                  });
                }
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold font-mono rounded-xl shadow-xl shadow-blue-500/25 dark:shadow-blue-400/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <span className="relative text-lg">👀</span>
              <span className="relative">Ver Mis Proyectos</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("contact");
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: "smooth",
                  });
                }
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold font-mono rounded-xl border-2 border-white/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <span className="relative text-lg">💬</span>
              <span className="relative">Hablemos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;