import React from 'react';
import './Skills.css';

const Skill = ({ name, percentage }) => {
  const circleStyle = {
    background: `conic-gradient(var(--yellow) ${percentage * 3.6}deg, rgba(255, 255, 255, 0.15) 0deg)`,
  };

  return (
    <div className="skill">
      <div className="outer-circle" style={circleStyle}>
        <div className="inner-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
      <p>{name}</p>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { name: 'HTML', percentage: 92 },
    { name: 'JAVASCRIPT', percentage: 85 },
    { name: 'CSS', percentage: 90 },
    { name: 'REACT', percentage: 80 },
    { name: 'EXPRESS', percentage: 30 },
    { name: 'POWERPOINT', percentage: 90 },
    { name: 'WORD', percentage: 80 },
    { name: 'EXCEL', percentage: 70 },
    { name: 'Latex', percentage: 65 },
    { name: 'Networking', percentage: 80 },
    { name: 'Git and GitHub', percentage: 90 },
    { name: 'MS Project', percentage: 85 },
    { name: 'CMS', percentage: 90 },
    

  ];

  return (
    <section id="skills" className="skills-container">

      <h1>MY SKILLS</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
     

    </section>
  );
};

export default Skills;
