import React from 'react';
import './Button.css';

export const Button = ({ desc, type }) => {
  return (
    <>
      <button className={`btn ${type}`}>{desc}</button>
    </>
  );
};
