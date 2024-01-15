'use client';
import { useState } from 'react';
import Search from './components/search';
import TripList from './components/tripList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [routes, setRoutes] = useState();
  return (
    <Container>
      <Row className="m-3">
        <Col className="text-center">
          <h3>Stockholm Transport Emissions Calculator</h3>
        </Col>
      </Row>
      <Search setRoutes={setRoutes} />
      <TripList routes={routes} />
    </Container>
  );
}
