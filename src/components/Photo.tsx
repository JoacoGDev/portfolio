interface PhotoProps {
  img: string;
  className?: string; // corrección: className con N mayúscula
}

const Photo = ({ img, className }: PhotoProps) => {
  return (
    <div className="mt-8">
      <img
        src={img}
        alt="Avatar de Joaquín"
        className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl mx-auto md:mx-0 object-cover shadow-lg ${className || ""}`}
      />
    </div>
  );
};

export default Photo;
