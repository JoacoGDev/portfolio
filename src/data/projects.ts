import foto from "../assets/mockup 1.jpg"
import foto2 from "../assets/681shots_so.webp"
import foto3 from "../assets/32shots_so.webp"

export type Project = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    demoUrl: string;
    imageUrl: string;
}

export const projects: Project[] = [
    {
        title: "Realtime-Chat App",
        description: "A chat application that allows users to communicate in real-time using WebSockets.",
        technologies: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://lavish-curiosity-production-f194.up.railway.app",
        imageUrl: foto,
    },
     {
        title: "Pollomorfismo",
        description: "Un sistema de gestión de restaurantes para clientes y gestores",
        technologies: ["Java", "Swing"],
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://qr-code-generator-ejuj.onrender.com",
        imageUrl: foto2,
    },
     {
        title: "Realtime Chat",
        description: "A chat application that allows users to communicate in real-time using WebSockets.",
        technologies: ["Node.Js", "Express", "JWT", "SQL", "Socket.io"],
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://lavish-curiosity-production-f194.up.railway.app/chat.html",
        imageUrl: foto3,
    }
]
