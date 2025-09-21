interface TitleProps {
    text: string;
    className?: string;
}

const Title = ({text, className}: TitleProps) => {
   return (
    <h1
      className={`font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold 
                 tracking-tight mb-4 text-blue-600 dark:text-blue-400 ${
                   className || ""
                 }`}
    >
      {text}    
    </h1>
   );
}

export default Title;