import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo global fijo */}
      <Background />

      {/* Contenido */}
      <Navbar />
      <Hero />
      <Projects />
      {/* otras secciones */}
    </div>

  );
}

export default App;
