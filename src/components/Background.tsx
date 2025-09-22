const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
      {/* Fondo Light */}
      
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>


    
      {/* Fondo Dark */}
      <div className="hidden dark:block absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
  );
};

export default Background;
