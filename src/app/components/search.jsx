'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import StopsDataList from './stopsDataList';
import FormInput from './formInput';

const formID = {
  fromID: 'fromID',
  toID: 'toID'
};

export default function Search() {
  const [fromStops, setFromStops] = useState([]);
  const [toStops, setToStops] = useState([]);
  const [fromStop, setFromStop] = useState({ Name: '' });
  const [toStop, setToStop] = useState({ Name: '' });
  const [routes, setRoutes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getRoutes() {
    setIsLoading(true);
    console.log(fromStop);
    console.log(toStop);
    const originExtId = fromStop.SiteId;
    const destExtId = toStop.SiteId;
    const response = await fetch(
      `/api/routes?originExtId=${originExtId}&destExtId=${destExtId})`
    );
    const data = await response.json();
    console.log(response);
    setRoutes(data);
    console.log(data);
    setIsLoading(false);
  }

  return (
    <Form action={getRoutes}>
      <Form.Group controlId="formSearch">
        <Row>
          <Col>
            <FormInput
              label={'From'}
              setStops={setFromStops}
              setStop={setFromStop}
              stop={fromStop}
            />
            <StopsDataList
              stops={fromStops}
              setStops={setFromStops}
              setStop={setFromStop}
            />
          </Col>
          <Col>
            <FormInput
              label={'To'}
              setStops={setToStops}
              setStop={setToStop}
              stop={toStop}
            />
            <StopsDataList
              stops={toStops}
              setStops={setToStops}
              setStop={setToStop}
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col className="text-center">
            <Button variant="primary" type="submit">
              {isLoading ? 'Loading…' : 'Search'}
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
