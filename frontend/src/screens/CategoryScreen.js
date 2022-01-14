import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
      ) : error ? (
        <h2>{error}</h2>
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
