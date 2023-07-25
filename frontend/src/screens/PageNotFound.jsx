import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const PageNotFound = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <img width="100%" src="/assets/images/pnf.jpg" alt="page not found" />
        </Col>
        <Col xs={12} md={4}>
          Sorry! We couldn't find that page.
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
