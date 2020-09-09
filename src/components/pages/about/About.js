import React from 'react';
import './About.css';

export const About = () => {
  return (
    <>
      <section className='about animate__animated animate__pulse delay-025s'>
        <div className='about-container'>
          <div className='description'>
            <h1 className='animate__animated animate__fadeInDown'>
              A little bit about me
            </h1>
            <img
              src='/images/self.png'
              alt='Rohan'
              className='animate__animated animate__wobble'
            />
            <p>
              Hey! My name is Rohan and I'm a web developer with a passion
              for front end development and design. I'm currently a first year
              student at{' '}
              <span style={{ color: 'blue' }}>
                Sagarmatha College of Science and Technology
              </span>{' '}
              Sagarmatha College of Science and Technology pursuing a degree in
              information technology with a minor in interaction design. I
              aspire toward a career that will allow me to channel my creativity
              through crafting beautiful software and engaging experiences.
            </p>
            <p>
              When I'm not on the computer, I enjoy listening musics, sketching,
              and petting dogs.
            </p>
          </div>
          <div className='card'>
            <h1>Self Proclamations:</h1>
            <div className='card-items'>
              <div className='card-item'>
                <i className='fa fa-keyboard icons' />
                <span>Web developer</span>
              </div>
              <div className='card-item'>
                <i className='far fa-edit icons' />
                <span>UX Enthusiast</span>
              </div>
              <div className='card-item'>
                <i className='fas fa-pencil-ruler icons' />
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
