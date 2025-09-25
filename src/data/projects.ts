
import foto2 from "../assets/988shots_so.webp"
import foto3 from "../assets/32shots_so.webp"
import portfolioImg from "../assets/697shots_so.webp"
import qrCodeGeneratorImg from "../assets/763shots_so.webp"

export type Project = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    imageUrl: string;
    demoUrl?: string;
    concepts?: string[];
}

export const projects: Project[] = [
    {
        title: "Realtime-Chat App",
        description: "Una app de chat para comunicarse en tiempo real usando WebSockets.",
        technologies: ["Node.js", "Express", "Socket.io", "Bootstrap", "JWT", "CSS"],
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://lavish-curiosity-production-f194.up.railway.app",
        imageUrl: foto3,
    },    
       {
        title: "Portfolio Web",
        description: "Mi propia web donde mostrar mi experiencia y proyectos",
        technologies: ["Node.Js", "React", "Vite", "Tailwind", "EmailJs", "SQL"],
        githubUrl: "https://github.com/JoacoGDev/portfolio-frontend.git",
        imageUrl: portfolioImg,
    },
  
     {
        title: "Pollomorfismo",
        description: "Un sistema de gestión de restaurantes para clientes y gestores",
        technologies: ["Java", "Swing"],
        concepts: ["MVC", "Observer", "State", "Strategy"],
        githubUrl: "https://github.com/JoacoGDev/SistemaRestaurante.git",
        imageUrl: foto2,
    },
       {
        title: "QrCode Generator",
        description: "Una app web que genera códigos qr para tus links",
        technologies: ["Node.Js", "Express", "QrCode", "Tailwind"],
        githubUrl: "https://github.com/JoacoGDev/qr-code-generator.git",
        demoUrl: "https://qr-code-generator-ejuj.onrender.com/",
        imageUrl: qrCodeGeneratorImg,
    },
]
