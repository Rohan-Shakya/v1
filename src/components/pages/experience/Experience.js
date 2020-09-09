import React from 'react';
import { ExperienceImage } from './ExperienceImage';
import './Experience.css';

export const Experience = () => {
  return (
    <>
      <section className='experience animate__animated animate__pulse delay-025s'>
        <div className='experience-container'>
          <h1 className='animate__animated animate__fadeInDown'>Experience</h1>
          <p className='animate__animated animate__fadeInDown'>
            I've been doing web development for about 1.5 years now, and I'm
            always eager to learn more in this fast paced industry.
          </p>
          <article className='animate__animated animate__fadeInUp'>
            <h3>SOME TECHNOLOGIES I'VE WORKED WITH:</h3>
            <div className='images'>
              <ExperienceImage src='/images/html.png' desc='HTML' />
              <ExperienceImage src='/images/css.png' desc='CSS' />
              <ExperienceImage src='/images/sass.png' desc='Sass' />
              <ExperienceImage src='/images/js.png' desc='Javascript' />
              <ExperienceImage src='/images/python.png' desc='Python' />
              <ExperienceImage src='/images/jquery.png' desc='Jquery' />
              <ExperienceImage src='/images/bootstrap.png' desc='Bootstrap' />
              <ExperienceImage src='/images/React.png' desc='React' />
              <ExperienceImage src='/images/node.png' desc='Node' />
              <ExperienceImage src='/images/mongodb.png' desc='Mongodb' />
              <ExperienceImage src='/images/github.png' desc='Github' />
              <ExperienceImage src='/images/photoshop.png' desc='Photoshop' />
              <ExperienceImage src='/images/adobeXD.png' desc='AdobeXD' />
              <ExperienceImage src='/images/linux.png' desc='Linux' />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
