import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

  return (
    <section id="about-me" className="AboutMe-container">
      <div className="header-wrapper">
        <h1>ABOUT<span> ME </span></h1>
        <h1 className="back">ABOUT ME</h1>
      </div>
      <div className="AboutMe-info">
        <div className="personal_info">
          <h2>PERSONAL INFOS</h2>
          <div className="infos">
            <p>First Name: <span> Abdallah</span></p>
            <p>Last Name: <span> Daheur </span></p>
            <p>Age: <span>21 Years</span></p>
            <p>Nationality: <span>Algerian</span></p>
            <p>Phone: <span>+213699052726</span></p>
            <p>Freelance: <span>Available</span></p>
            <p>Languages: <span>Arabic, English, French</span></p>
            <p>Email: <span>daheurabdallah22@gmail.com</span></p>
          </div>
          
        </div>
        <div className="info-project">
          <div className="info-item">
            <h1>2<span>+</span></h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="info-item">
            <h1>8<span>+</span></h1>
            <p>COMPLETED PROJECTS</p>
          </div>
          <div className="info-item">
            <h1>3<span>+</span></h1>
            <p>HAPPY CUSTOMERS</p>
          </div>
          <div className="info-item">
            <h1>0<span>+</span></h1>
            <p>AWARDS WON</p>
          </div>
        </div>
  
      </div>
    </section>
  );
}

export default AboutMe;
