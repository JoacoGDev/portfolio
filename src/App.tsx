import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects';

function App() {

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-colors duration-300">
        <Navbar/>
        <Hero/>
        <Projects/>

    </div>
    
  )
}

export default App
