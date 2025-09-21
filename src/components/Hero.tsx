import Title from "./Title";
import TextLine from "./TextLine";
import Photo from "./Photo";
import fotoJoaco from "../assets/fotoJoaco-removebg-preview.png"

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 gap-8 lg:gap-16"
    >
      {/* Texto a la izquierda */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md md:max-w-lg space-y-4">
        <Title
          text="Hola, soy Joaco"
          className="text-left text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        />
        <TextLine
          text="Desarrollador Full-Stack Uruguayo, apasionado por crear soluciones digitales."
          className="text-left text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300"
        />

        {/* Botón CV */}
        <a
          href="/cv.pdf" // reemplaza por tu link o API
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
        >
          Descargar CV
        </a>
      </div>

      {/* Foto a la derecha */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Photo
          img={fotoJoaco}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
