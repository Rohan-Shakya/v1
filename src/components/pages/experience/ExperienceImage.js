import React from 'react';

export const ExperienceImage = ({ src, desc }) => {
  return (
    <>
      <img src={src} alt={desc} title={desc} />
    </>
  );
};
