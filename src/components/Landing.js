import React from 'react';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Passion } from './pages/passion/Passion';
import { Experience } from './pages/experience/Experience';
import { Contact } from './pages/contact/Contact';
import { Work } from './pages/work/Work';
import { Button } from './buttons/Button';

export const Landing = () => {
  return (
    <div>
      <Home />
      <About />
      <Passion />
      <Experience />
      <div className='resume'>
        <h2>Check out my resume !</h2>
        <Button desc='Grab a Copy' type='btn-outline-white' />
      </div>
      <Work />
      <Contact />
    </div>
  );
};
