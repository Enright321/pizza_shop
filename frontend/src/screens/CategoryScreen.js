import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const CategoryScreen = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/products');
      setLoading(false);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const urlCategory = window.location.pathname.split('/')[1];
  let drinks = products.filter((product) => product.category === 'Drinks');
  let pastas = products.filter((product) => product.category === 'Pastas');
  let apps = products.filter((product) => product.category === 'Appetizers');
  let subs = products.filter((product) => product.category === 'Sandwiches');
  let pizzas = products.filter((product) => product.category === 'Pizzas');
  let salads = products.filter((product) => product.category === 'Salads');

  return (
    <Container>
      <h1>{urlCategory}</h1>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {urlCategory === 'Drinks' ? (
            <Row>
              {drinks.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product item={item} />
                </Col>
              ))}
            </Row>
          ) : urlCategory === 'Appetizers' ? (
            <Row>
              {apps.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product item={item} />
                </Col>
              ))}
            </Row>
          ) : urlCategory === 'Pastas' ? (
            <Row>
              {pastas.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product item={item} />
                </Col>
              ))}
            </Row>
          ) : urlCategory === 'Sandwiches' ? (
            <Row>
              {subs.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product item={item} />
                </Col>
              ))}
            </Row>
          ) : urlCategory === 'Pizzas' ? (
            <Row>
              {pizzas.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product item={item} />
                </Col>
              ))}
            </Row>
          ) : (
            urlCategory === 'Salads' && (
              <Row>
                {salads.map((item) => (
                  <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                    <Product item={item} />
                  </Col>
                ))}
              </Row>
            )
          )}
        </>
      )}
    </Container>
  );
};

export default CategoryScreen;
