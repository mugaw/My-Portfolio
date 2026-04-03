import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import ProjectDetail from './sections/ProjectDetail';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store';
import { setCurrentProject } from './store/projectsSlice';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const dispatch = useDispatch();
  const currentProject = useSelector((state: RootState) => state.projects.currentProject);

  useEffect(() => {
    // Initialize smooth scroll behavior
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger on load
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (projectId: string) => {
    dispatch(setCurrentProject(projectId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    dispatch(setCurrentProject(null));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navigation />
      
      {currentProject ? (
        <ProjectDetail 
          projectId={currentProject} 
          onBack={handleBackToProjects}
        />
      ) : (
        <main>
          <Hero />
          <Projects onProjectClick={handleProjectClick} />
          <About />
          <Skills />
          <Contact />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
