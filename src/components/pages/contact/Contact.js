import React from 'react';
import './Contact.css';
import { Button } from '../../buttons/Button';

export const Contact = () => {
  return (
    <>
      <div className='contact animate__animated animate__pulse delay-025s'>
        <div className='contact-container'>
          <div className='touch animate__animated animate__fadeInDown'>
            <i className='fa fa-paper-plane'></i>
            <h1>Get in touch!</h1>
            <p>
              Whether you have an idea for a project or just want to chat,
              <br /> feel free to shoot me an email!
            </p>
            <Button desc='Say Hello' type='btn-outline-dark' />
          </div>
          <footer className='footer animate__animated animate__fadeInUp'>
            <div className='social-icons'>
              <i className='fab fa-facebook'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-github'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-medium'></i>
            </div>
            <p>
              <a href='/#'>
                <i className='fas fa-space-shuttle'></i>
              </a>
            </p>
            <p>&copy; Rohan Shakya 2020</p>
          </footer>
        </div>
      </div>
    </>
  );
};
