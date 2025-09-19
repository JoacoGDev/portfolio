export type Project = {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
}

export const projects: Project[] = [
    {
        title: "Realtime-Chat App",
        description: "A chat application that allows users to communicate in real-time using WebSockets.",
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://lavish-curiosity-production-f194.up.railway.app"
    },
     {
        title: "QrCode Generator",
        description: "A web application that generates QR codes for URLs.",
        githubUrl: "https://github.com/JoacoGDev/realtime-chat",
        demoUrl: "https://qr-code-generator-ejuj.onrender.com"
    }
]
