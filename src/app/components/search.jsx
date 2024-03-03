'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import SearchField from './searchField';

export default function Search({ setRoutes }) {
  const [fromStops, setFromStops] = useState([]);
  const [toStops, setToStops] = useState([]);
  const [fromStop, setFromStop] = useState();
  const [toStop, setToStop] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getRoutes() {
    setIsLoading(true);
    const originExtId = fromStop.SiteId;
    const destExtId = toStop.SiteId;
    const response = await fetch(
      `/api/routes?originExtId=${originExtId}&destExtId=${destExtId}`
    );
    const data = await response.json();
    setRoutes(data);
    setIsLoading(false);
  }

  return (
    <Form action={getRoutes}>
      <Row>
        <Col>
          <SearchField
            label="From"
            stops={fromStops}
            setStops={setFromStops}
            setStop={setFromStop}
          />
        </Col>
        <Col>
          <SearchField
            label="To"
            stops={toStops}
            setStops={setToStops}
            setStop={setToStop}
          />
        </Col>
      </Row>
      <Row className="m-3">
        <Col className="text-center">
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading}
            onClick={!isLoading ? getRoutes : null}
          >
            {isLoading ? 'Loading…' : 'Search'}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
