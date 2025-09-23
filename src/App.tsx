import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Background from "./components/Background";
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo global fijo */}
      <Background />

      {/* Contenido */}
      <Navbar />
      <Hero />
      <Projects />
      <About/>
      <Contact/>
    </div>

  );
}

export default App;
