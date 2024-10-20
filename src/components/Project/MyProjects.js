import React from 'react';
import './MyProjects.css';
import imge from '../../assets/Screenshot (435).png'
import xo from '../../assets/xo.png'
import weather from '../../assets/weather.png'
import shop from '../../assets/shop.png'

const MyProjects = () => {
  const projects = [
    {
      title: 'Ecommerce Book Shop',
      description: 'Shop a diverse selection of books with ease. Our simple and intuitive website offers a smooth browsing and purchasing experience. ',
      image: `${shop}`, // Replace with your image
      link: 'https://bookoub.onrender.com/'
    },
    {
      title: 'Lucky Wheel',
      description: 'this porject allow the user to enter a code to enter to the spinning page and try your luck you can try the in code (admin)',
      image: `${imge}`, // Replace with your image
      link: 'https://magnificent-daffodil-8fb55d.netlify.app'
    },
    {
      title: 'XO-game',
      description: 'play with your friend a game and have fun',
      image: `${xo}`,
      link: 'https://66be47479a4e0d1df7aa67cf--vermillion-cupcake-612498.netlify.app/'
    },
    {
      title: 'Weather Application',
      description: 'get the current weather for any place in the world',
      image: `${weather}`,
      link: 'https://weather-app000001.netlify.app/'
    } ,
    // Add more projects or presentations as needed
  ];

  return (
    <section id="projects" className="my-projects">
    
      <h1>My <span>Projects</span> </h1>
      <div className="projects-grid">
      {projects.map((project, index) => (
        <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
          <div className="line"></div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </a>
      ))}
      <p className='me'> For more projects, visit my GitHub : <a href='https://github.com/abdallah-dh'> Click here  </a>  </p>
      </div>

      
    </section>
    
  );
};

export default MyProjects;
