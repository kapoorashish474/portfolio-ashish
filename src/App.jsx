import { useCallback, useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Custom cursor only for mouse/trackpad; touch devices keep native behaviour.
const hasFinePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaded = useCallback(() => setLoading(false), []);

  return (
    <main className={`bg-[#050505] min-h-screen text-white relative selection:bg-red-600 selection:text-white ${hasFinePointer ? 'custom-cursor' : ''}`}>
      {loading && <Preloader onComplete={handleLoaded} />}
      {hasFinePointer && <CustomCursor />}

      <Hero />
      <Stats />
      <About />
      <Experience />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
