import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Categories from '../components/Categories';
import axios from 'axios';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/categories');
      setLoading(false);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <Container>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
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
