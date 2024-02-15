import './App.css';
import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Experience from './components/sections/experience/Experience';
import Education from './components/sections/education/Education';
import Skills from './components/sections/skills/Skills';
import Projects from './components/sections/projects/Projects';

import cv from './cv.json'

function App() {
  return (
    <div className="App">
      <Hero basics={cv.basics} />
      <About basics={cv.basics} />
      <Experience work={cv.work} />
      <Education education={cv.education} />
      <Skills skills={cv.skills} />
      <Projects projects={cv.projects} />
    </div>
  );
}

export default App;
