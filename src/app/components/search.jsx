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
  const [fromStop, setFromStop] = useState('');
  const [toStop, setToStop] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getRoutes(formData) {
    console.log('fires!');

    // const response = await fetch('/api/stops?query=' + searchString);
    // const data = await response.json();
    // setStops(data.data);
  }

  return (
    <Form action={getRoutes}>
      <Form.Group controlId="formSearch">
        <Row>
          <Col>
            <FormInput
              label={'From'}
              id={formID.fromID}
              setStops={setFromStops}
              setStop={setFromStop}
              value={fromStop}
            />
            <StopsDataList
              id={formID.fromID}
              stops={fromStops}
              setStops={setFromStops}
              setStop={setFromStop}
              value={fromStop}
            />
          </Col>
          <Col>
            <FormInput label={'To'} id={formID.toID} setStops={setToStops} />
            <StopsDataList
              id={formID.toID}
              stops={toStops}
              setStops={setToStops}
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col className="text-center">
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading…' : 'Search'}
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
