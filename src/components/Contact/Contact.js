import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs
      .sendForm('service_elle6rv', 'templte_4ad4k0u', formRef.current, 'chadpDqm4tdU76cDY')
      .then(() => {
        setMessageSent(true);
        console.log('SUCCESS!');
      })
      .catch((error) => {
        setError('Failed to send message. Please try again later.');
        console.log('FAILED...', error.text);
      })
      .finally(() => {
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setMessageSent(false);
          setError(''); // Clear error message after a timeout
        }, 3000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="header-wrapper">
        <h1>GET IN <span>TOUCH </span></h1>
        <h1 className="back">GET IN TOUCH</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>DON'T BE SHY!</h3>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>ALGERIA, ALGIERS BAB ZOUAR.</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>daheurabdallah22@gmail.com
              </span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+213699052726</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://web.facebook.com/profile.php?id=100051857886413"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/abdou_d_h/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="contact-form">
          <h2>SEND A MESSAGE</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group form1">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Your Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'SENDING...' : 'SEND MESSAGE'} <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          {messageSent && <p className='swap'>SENT SUCCESSFULLY!!</p>}
          {error && <p className='swap'>{error}</p>} {/* Error message display */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
