import fotoJoaco from '../assets/fotoJoaco-removebg-preview.png';
import Title from './Title.tsx'
import Photo from './Photo.tsx';
import TextLine from './TextLine.tsx';

const Hero = () => {
  return (
        <section
        id="hero"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 gap-6"
        >
        {/* Texto a la izquierda */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md md:max-w-sm">
            <Title
            text="Hola, soy Joaco"
            className="text-left"
            />
            <TextLine
            text="Desarrollador Full-Stack Uruguayo, apasionado por crear soluciones digitales."
            className="text-left"
            />
        </div>

        {/* Foto a la derecha */}
        <Photo
            img={fotoJoaco}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-56 md:h-56 rounded-2xl"
        />



       {/* 
       
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          Ver Proyectos
        </a>
        <a
          href="./assets/CV_Joaquin_Gil.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          Descargar CV
        </a>
      </div>
      
        
       */}

    </section>
  );
};

export default Hero;
