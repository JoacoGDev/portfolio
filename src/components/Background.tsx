import { cn } from "../utils/cn";

const Background = () => {
  return (
    <div className={cn(
      "fixed inset-0 -z-20 w-full h-full overflow-hidden"
    )}>
      {/* Light Mode Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:hidden">
        {/* Base atmospheric layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/80 via-blue-50/60 to-violet-50/80"></div>
        
        {/* Large colorful gradients */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] -translate-y-64 translate-x-64 rounded-full bg-gradient-to-br from-blue-300/60 via-indigo-400/50 to-purple-500/60 blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] translate-y-64 -translate-x-64 rounded-full bg-gradient-to-tr from-emerald-300/50 via-cyan-400/45 to-blue-500/55 blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Mid-layer intense colors */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-400/45 via-purple-400/40 to-blue-500/50 blur-[90px] animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] rounded-full bg-gradient-to-l from-teal-400/40 via-cyan-400/45 to-indigo-500/50 blur-[85px] animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-400/35 via-rose-400/30 to-violet-500/45 blur-[100px] animate-pulse delay-2000"></div>
        
        {/* Additional color spots */}
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-orange-300/35 via-amber-400/30 to-yellow-400/40 blur-[80px] animate-pulse delay-2500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-lime-300/30 via-green-400/35 to-emerald-500/40 blur-[75px] animate-pulse delay-3000"></div>
        
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-transparent to-purple-200/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/30 via-transparent to-cyan-100/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-100/25 to-transparent"></div>
        
        {/* Enhanced patterns */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgb(99 102 241 / 0.5) 1px, transparent 0),
              radial-gradient(circle at 25px 25px, rgb(139 69 199 / 0.4) 1px, transparent 0),
              radial-gradient(circle at 45px 10px, rgb(59 130 246 / 0.3) 0.5px, transparent 0)
            `,
            backgroundSize: '80px 80px, 60px 60px, 40px 40px'
          }}
        ></div>
        
        {/* Dynamic mesh lines */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(60deg, transparent 47%, rgb(139 69 199 / 0.15) 49%, rgb(139 69 199 / 0.15) 51%, transparent 53%),
              linear-gradient(-60deg, transparent 47%, rgb(59 130 246 / 0.12) 49%, rgb(59 130 246 / 0.12) 51%, transparent 53%),
              linear-gradient(30deg, transparent 48.5%, rgb(168 85 247 / 0.10) 49.5%, rgb(168 85 247 / 0.10) 50.5%, transparent 51.5%)
            `,
            backgroundSize: '250px 250px, 180px 180px, 120px 120px'
          }}
        ></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/5 right-1/5 w-3 h-3 bg-blue-500/70 rounded-full animate-bounce delay-300" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 left-1/5 w-2.5 h-2.5 bg-purple-500/80 rounded-full animate-bounce delay-700" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-12 bg-gradient-to-b from-violet-500/60 to-transparent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-2 bg-gradient-to-r from-cyan-500/60 to-transparent rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-2/3 right-1/2 w-4 h-4 border-2 border-indigo-500/50 rounded-full animate-spin delay-800" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/6 left-1/2 w-1 h-1 bg-emerald-500/80 rounded-full animate-ping delay-1500"></div>
        <div className="absolute bottom-1/5 right-1/3 w-6 h-1 bg-gradient-to-r from-rose-400/50 to-pink-500/60 rounded-full animate-pulse delay-2200"></div>
        
        {/* Color harmony overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/40 via-transparent to-indigo-100/50"></div>
      </div>

      {/* Dark Mode Background */}
      <div className="hidden dark:block absolute inset-0 bg-gray-950">
        {/* Main cosmic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950/50 to-indigo-950/30"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] -translate-y-40 translate-x-40 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-blue-700/25 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-40 -translate-x-40 rounded-full bg-gradient-to-tr from-indigo-600/15 via-blue-500/10 to-cyan-600/20 blur-[100px] animate-pulse delay-1000"></div>
        
        {/* Tech accent lights */}
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/15 blur-[80px] animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-gradient-to-l from-cyan-500/8 to-blue-400/12 blur-[70px] animate-pulse delay-1500"></div>
        
        {/* Grid pattern - more visible in dark */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Subtle code-like pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 98%, rgb(59 130 246 / 0.1) 100%)`,
            backgroundSize: '100px 2px'
          }}
        ></div>
        
        {/* Starfield effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-indigo-400/60 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-cyan-400/80 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-2/3 w-0.5 h-0.5 bg-blue-300/70 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-indigo-300/60 rounded-full animate-ping delay-2000"></div>
        </div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-950/40"></div>
      </div>
    </div>
  );
};

export default Background;