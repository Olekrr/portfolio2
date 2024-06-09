import React from 'react';
import AboutMe from './components/about/About';
import ProjectsCarousel from './components/projects/ProjectsCarousel';
import './App.css';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <h1>Ole Kristian Front End</h1>
      <main className="main-content">
        <AboutMe />
        <ProjectsCarousel />
      </main>
    </div>
  );
}

export default App;
