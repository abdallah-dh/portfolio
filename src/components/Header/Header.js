import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section id="home" className="header">
      <div className="imag">
        <img src='https://res.cloudinary.com/dkyoicbwj/image/upload/v1729372678/photo_2024-08-25_02-55-46_odt9ao.jpg' alt="Abderrahim" />
        <div className="overlayer"></div>
      </div>
      <div className="header-content">
        <h1>— I'm Daheur Abdallah.<br />
          <span>&nbsp; web developer and network specialist. </span>
        </h1>
        <p>I'm a web developer and network specialist from Algeria, skilled in creating modern, user-friendly websites. As a network specialist, I design and maintain secure network infrastructures, ensuring efficient connectivity and robust security for seamless digital experiences. My goal is to integrate web development and networking to enhance performance and data integrity
        .</p>
        <a href="#about-me" className="btn-primary">MORE ABOUT ME <i className="fas fa-paper-plane"></i></a>
      </div>
    </section>
  );
}

export default Header;
