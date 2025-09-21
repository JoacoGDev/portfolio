const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
      {/* Fondo Light */}
      <div className="absolute inset-0 bg-white dark:hidden"></div>
      <div className="absolute top-0 left-0 w-full h-full dark:hidden">
        <div className="absolute top-0 -translate-x-[30%] translate-y-[20%] w-[500px] h-[500px] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      {/* Fondo Dark */}
      <div className="hidden dark:block absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
  );
};

export default Background;
