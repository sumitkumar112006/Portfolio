import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <CustomCursor />
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
