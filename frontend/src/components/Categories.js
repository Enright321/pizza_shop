import React from 'react';
import { Card } from 'react-bootstrap';

const Categories = ({ category }) => {
  return (
    <a href={`/${category.category}`}>
      <Card className='m-3 p-3 rounded'>
        <Card.Img src={category.image} variant='top' />
        <Card.Body>
          <Card.Title as='div'>
            <strong>{category.category}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Categories;
