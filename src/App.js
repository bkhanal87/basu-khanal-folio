import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
