import foto from "../assets/mockup 1.jpg"

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
        title: "QrCode Generator",
        description: "A web application that generates QR codes for URLs.",
        technologies: ["React", "Node.js", "Express", "Tailwind CSS", "QRCode"],
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://qr-code-generator-ejuj.onrender.com",
        imageUrl: foto,
    }
]
