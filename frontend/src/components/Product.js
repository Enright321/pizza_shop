import { Card } from 'react-bootstrap';
const Product = ({ item }) => {
  return (
    <a href={`/product/${item._id}`}>
      <Card
        className='m-3 p-3 rounded'
        style={{
          backgroundColor: '#3a3328',
          color: '#dbd1ca',
          minHeight: '260px',
        }}
      >
        <Card.Img src={item.image} variant='top' />
        <Card.Body>
          <Card.Title as='h5' className='text-center'>
            <strong>{item.name}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};
export default Product;
