'use client';
import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

import Search from './components/search';
import TripList from './components/tripList';

export default function Home() {
  const [routes, setRoutes] = useState();
  return (
    <Container>
      <Row className="m-3">
        {/* <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {slugs?.map((slug) => {
              return (
                <Nav.Item key={slug}>
                  <Nav.Link href={`/${slug}`}>
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav> */}
        <Col className="text-center">
          <h3>Stockholm Transport Emissions Calculator</h3>
        </Col>
      </Row>
      <Search setRoutes={setRoutes} />
      <TripList routes={routes} />
    </Container>
  );
}
