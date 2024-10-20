import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact/Contact';
import MyProjects from './components/Project/MyProjects';
import './App.css'
// Import other components as needed

function App() {
  return (
    <div className="app-container">
      <div className="main-app-container">
      <Header/>
      <AboutMe />
      <Skills />
      <MyProjects/>
      <Contact/>
      </div>
      <Navbar />
      {/* Include other components here */}
    </div>
  );
}

export default App;
