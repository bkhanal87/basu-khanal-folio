import './App.css';
import About from './Components/About'
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Skills />
    </Router>
  );
}

export default App;
