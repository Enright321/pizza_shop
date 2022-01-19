import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Categories from '../components/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

import { Helmet } from 'react-helmet';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <Container>
      <Meta />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {categories.map((category) => (
            <Col key={category._id} sm={12} md={6} lg={4} xl={3}>
              <Categories category={category} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomeScreen;
