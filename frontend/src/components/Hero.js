import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ text, title, btn, link }) => {
  return (
    <div className='hero-image'>
      <div className='d-flex justify-content-start align-items-center'>
        <div>
          <h1 className='py-3'>{title}</h1>
          <p style={{ paddingBottom: '2rem' }}>{text}</p>
          <Link className='hero-btn' to={link}>
            {btn}
            <i
              style={{ paddingLeft: '.2rem' }}
              class='fas fa-arrow-circle-right'
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
Hero.defaultProps = {
  title: 'Treat Your Tastebuds.',
  text: 'Pizza, wings, and more. Order online for your next tailgate.',
  btn: 'PIZZAS',
  link: '/Pizzas',
};

export default Hero;
