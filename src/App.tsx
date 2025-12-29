import About from './components/about';
import Academic from './components/academic';
import Contact from './components/contact';
import Experience from './components/experience';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';

export default function App() {
  return (
    <div className='bg-background text-foreground'>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <Hero />
      </div>

      <main>
        <About />
        <Academic />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
