import React from 'react';
import './Passion.css';

export const Passion = () => {
  return (
    <>
      <section className='passion  '>
        <div className='passion-container animate__animated animate__pulse delay-025s'>
          <h1 className='animate__animated animate__fadeInDown'>What I Do</h1>
          <div className='passion-card animate__animated animate__fadeInUp'>
            <div className='passion-card-items'>
              <div className='passion-card-item'>
                <i className='fa fa-laptop' />
                <h3>Design</h3>
                <p>
                  Design isn't just what a product looks like and feels like on
                  the outside. Design encompasses the internal functionality of
                  a product as well as the overall user experience. I strive to
                  design interfaces and experiences that people can enjoy on all
                  digital mediums.
                </p>
              </div>
              <div className='passion-card-item'>
                <i className='fa fa-code' />
                <h3>Development</h3>
                <p>
                  With a strong foundation in computer science, I'm passionate
                  about web design and development, and interested in mobile app
                  development. As I grow as a developer, I hope to write clean,
                  readable code that can be used by others and leveraged to
                  create beautiful software.
                </p>
              </div>
              <div className='passion-card-item'>
                <i className='fa fa-lightbulb' />
                <h3>Involvement</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet quis accusamus unde obcaecati quidem nostrum ea, et
                  atque consequuntur, odit totam facilis mollitia eaque. Dolorem
                  obcaecati cumque iusto sed inventore aliquid minus rem
                  architecto nesciunt vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
