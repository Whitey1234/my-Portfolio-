import About from './Aboutme/About';
import Contact from './contact/Contact';
import Education from './Education/Educaton';
import Footer from './Footer/Footer';
import Hero from './hero/Hero';
import Navbar from './Navbar/Navbar';
import Projects from './MyProjects/Projects';
import Skills from './Skill/Skills';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-zinc-950 text-zinc-300 antialiased selection:bg-amber-400/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;