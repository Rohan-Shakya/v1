import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='hero-container'>
      <h1 className='animate__animated animate__fadeInDown delay-05s'>
        Hi, I'm Rohan
      </h1>
      <p className='animate__animated animate__fadeInUp delay-05s'>
        Web Developer &amp; UX Enthusiast
      </p>
      <Link className='fa fa-angle-down page-scroll' to='/about'></Link>
    </div>
  );
};
