import React, { useEffect, useState } from 'react';
import './Navbar.css';
import home from '../../assets/home5.png';
import person from '../../assets/person.png';
import skills from '../../assets/setting.png';
import code from '../../assets/monitor.png';
import chat from '../../assets/chat.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`); // Update the active section
        }
      });
    }, {
      threshold: 0.1, // Adjust this value based on how much of the section should be visible to activate
    });

    sections.forEach((section) => observer.observe(section)); // Observe each section

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer on component unmount
    };
  }, []);
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={activeSection === '#home' ? 'active' : ''}>
          <a href="#home">
            <img src={home} alt="Home" />
          </a>
        </li>
        <li className={activeSection === '#about-me' ? 'active' : ''}>
          <a href="#about-me">
            <img src={person} alt="About Me" />
          </a>
        </li>
        <li className={activeSection === '#skills' ? 'active' : ''}>
          <a href="#skills">
            <img src={skills} alt="Skills" />
          </a>
        </li>
        <li className={activeSection === '#projects' ? 'active' : ''}>
          <a href="#projects">
            <img src={code} alt="Projects" />
          </a>
        </li>
        <li className={activeSection === '#contact' ? 'active' : ''}>
          <a href="#contact">
            <img src={chat} alt="Contact" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
