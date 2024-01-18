'use client';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import fs from 'fs';
import Search from './components/search';
import TripList from './components/tripList';

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => filename.replace('.md', ''));
  return {
    props: {
      slugs: paths
    }
  };
};
export default function Home({ slugs }) {
  const [routes, setRoutes] = useState();
  return (
    <Container>
      <Row className="m-3">
        <Nav activeKey="/home">
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
        </Nav>
        <Col className="text-center">
          <h3>Stockholm Transport Emissions Calculator</h3>
        </Col>
      </Row>
      <Search setRoutes={setRoutes} />
      <TripList routes={routes} />
    </Container>
  );
}
