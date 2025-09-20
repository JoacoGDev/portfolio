import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './components/Skills'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />} />
          </Routes>
      
    </Router>     
    
    
  )
}

export default App
