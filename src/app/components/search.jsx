'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import StopsDataList from './stopsDataList';

export default function Search() {
  const [fromStops, setFromStops] = useState([]);
  const [toStops, setToStops] = useState([]);

  async function getStops(event, setStops) {
    const searchString = event.target.value;

    const response = await fetch('/api/stops?query=' + searchString);
    const data = await response.json();
    setStops(data.data);
  }

  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Row>
          <Col>
            <Form.Label>From</Form.Label>
            <Form.Control
              type="search"
              onChange={(e) => getStops(e, setFromStops)}
              placeholder="From"
              list="fromList"
            />
            <StopsDataList id={'fromList'} stops={fromStops} />
          </Col>
          <Col>
            <Form.Label>From</Form.Label>
            <Form.Control
              type="search"
              onChange={(e) => getStops(e, setToStops)}
              placeholder="To"
              list="toList"
            />
            <StopsDataList id={'toList'} stops={toStops} />
          </Col>
        </Row>
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    //   <form action={getStops}>
    //     <input name="searchString" />
    //     <button type="submit">Search</button>
    //   </form>

    // <Button
    //   variant="primary"
    //   disabled={isLoading}
    //   onClick={!isLoading ? handleClick : null}
    // >
    //   {isLoading ? 'Loading…' : 'Click to load'}
    // </Button>
    //   ;
  );
}
