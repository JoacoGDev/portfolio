interface PhotoProps {
  img: string;
  className?: string;
}

const Photo = ({ img, className }: PhotoProps) => {
  return (
    <div className="relative">
      <img
        src={img}
        alt="Avatar de Joaquín Gil - Desarrollador Full-Stack"
        className={`
          object-cover transition-all duration-500 hover:scale-105
          ${className || "w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl shadow-xl shadow-gray-900/20 dark:shadow-black/40 border-2 border-white/50 dark:border-gray-800/50"}
        `}
        loading="lazy"
      />
      
      {/* Glassmorphism overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
  );
};

export default Photo;