import React from 'react';

export const WorkItem = ({ src, desc, code, demo }) => {
  return (
    <>
      <figure className='item'>
        <img src={src} alt={desc} />
        <div className='overlay'>
          <div className='link-icons'>
            {code && (
              <a href={code} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github animate__animated animate__fadeInDown delay-025s'></i>
              </a>
            )}
            {demo && (
              <a href={demo} target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-external-link-alt animate__animated animate__fadeInDown delay-025s'></i>
              </a>
            )}
          </div>
          <p className='animate__animated animate__fadeInUp '>{desc}</p>
        </div>
      </figure>
    </>
  );
};

WorkItem.prototype = {
  src: null,
  desc: null,
  code: null,
  demo: null,
};
