import React from 'react';

const Categories = ({ category }) => {
  return (
    <a href={`/${category.category}`}>
      <div className='home-card'>
        <img
          className='home-card-img'
          src={category.image}
          alt={category.category}
        />
        <div className='home-card-text'>
          <h3 className='home-card-title'>{category.category}</h3>
        </div>
      </div>
    </a>
  );
};

export default Categories;
