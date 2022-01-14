import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';

const ProductScreen = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get(`/api/products/${params.id}`);
      setLoading(false);
      setProduct(data);
    };
    fetchProducts();
  }, [params.id]);

  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Link className='btn btn-dark my-3' to={`/${product.category}`}>
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: ${product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
