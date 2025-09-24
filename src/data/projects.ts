import foto from "../assets/mockup 1.jpg"
import foto2 from "../assets/681shots_so.webp"
import foto3 from "../assets/32shots_so.webp"

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
        imageUrl: foto,
    },    
     {
        title: "Realtime Chat",
        description: "A chat application that allows users to communicate in real-time using WebSockets.",
        technologies: ["Node.Js", "Express", "JWT", "SQL", "Socket.io"],
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://lavish-curiosity-production-f194.up.railway.app/chat.html",
        imageUrl: foto3,
    },
     {
        title: "Pollomorfismo",
        description: "Un sistema de gestión de restaurantes para clientes y gestores",
        technologies: ["Java", "Swing"],
        concepts: ["MVC", "Observer", "State", "Strategy"],
        githubUrl: "https://github.com/JoacoGDev/SistemaRestaurante.git",
        imageUrl: foto2,
    },
]
