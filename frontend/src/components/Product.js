import { Card } from 'react-bootstrap';
const Product = ({ item }) => {
  return (
    <Card className='m-3 p-3 rounded'>
      <a href={`/product/${item._id}`}>
        <Card.Img src={item.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${item._id}`}>
          <Card.Title as='div'>
            <strong>{item.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='h3'>${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
