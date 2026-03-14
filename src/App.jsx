import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Trainings from './components/Trainings';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import CV from './components/CV';
import Contact from './components/Contact';
import SectionIndicator from './components/SectionIndicator';
import SmoothScroll from './components/SmoothScroll';
import ProjectDetail from './components/ProjectDetail';
import TrainingDetail from './components/TrainingDetail';
import LoadingTransition from './components/LoadingTransition';
import { projects } from './data/projects';
import { trainings } from './data/trainings';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedTrainingId, setSelectedTrainingId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionProject, setTransitionProject] = useState(null);
  const [transitionTraining, setTransitionTraining] = useState(null);
  const [showCV, setShowCV] = useState(false);

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  const selectedTraining = trainings.find(t => t.id === selectedTrainingId);

  const handleProjectSelect = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setTransitionProject(project);
    setTransitionTraining(null);
    setIsTransitioning(true);

    // Simulate loading/transition time
    setTimeout(() => {
      setSelectedProjectId(projectId);
      setSelectedTrainingId(null);
      setIsTransitioning(false);
    }, 1200);
  };

  const handleTrainingSelect = (trainingId) => {
    const training = trainings.find(t => t.id === trainingId);
    setTransitionTraining(training);
    setTransitionProject(null);
    setIsTransitioning(true);

    // Simulate loading/transition time
    setTimeout(() => {
      setSelectedTrainingId(trainingId);
      setSelectedProjectId(null);
      setIsTransitioning(false);
    }, 1200);
  };

  const handleBack = () => {
    setSelectedProjectId(null);
    setSelectedTrainingId(null);
  };

  const handleNextProject = (currentProjectId) => {
    const currentIndex = projects.findIndex(p => p.id === currentProjectId);
    const nextIndex = (currentIndex + 1) % projects.length;
    handleProjectSelect(projects[nextIndex].id);
  };

  const handleNextTraining = (currentTrainingId) => {
    const currentIndex = trainings.findIndex(t => t.id === currentTrainingId);
    const nextIndex = (currentIndex + 1) % trainings.length;
    handleTrainingSelect(trainings[nextIndex].id);
  };

  return (
    <SmoothScroll>
      <div className="bg-black min-h-screen text-white">
        <div id="home" className="absolute top-0 left-0 w-full h-1 pointer-events-none" />
        <AnimatePresence mode="wait">
          {isTransitioning && (transitionProject || transitionTraining) && (
            <LoadingTransition 
              key="transition"
              projectIndex={transitionProject ? projects.findIndex(p => p.id === transitionProject.id) : trainings.findIndex(t => t.id === transitionTraining.id)} 
              projectTitle={(transitionProject || transitionTraining).title.split(' – ')[0]} 
            />
          )}
        </AnimatePresence>

        <div 
          className={`transition-opacity duration-700 ${selectedProjectId || selectedTrainingId || showCV ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <Navbar onOpenCV={() => setShowCV(true)} />
          <SectionIndicator />
          <main>
            <div className="sticky top-0 h-screen w-full">
              <Hero />
            </div>
            <div className="relative z-10 bg-black">
              <About />
              <Trainings onTrainingSelect={handleTrainingSelect} />
              <Certifications />
              <Projects onProjectSelect={handleProjectSelect} />
              <SoftSkills />
              <Contact />
            </div>
          </main>
        </div>

        <AnimatePresence>
          {showCV && (
            <CV isOpen={showCV} onClose={() => setShowCV(false)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedProjectId && !isTransitioning && (
            <ProjectDetail 
              key="project-detail"
              project={selectedProject} 
              onBack={handleBack} 
              onNext={() => handleNextProject(selectedProjectId)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedTrainingId && !isTransitioning && (
            <TrainingDetail 
              key="training-detail"
              training={selectedTraining} 
              onBack={handleBack} 
              onNext={() => handleNextTraining(selectedTrainingId)}
            />
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}
