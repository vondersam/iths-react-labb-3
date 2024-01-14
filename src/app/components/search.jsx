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

  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Row>
          <Col>
            <FormInput
              label={'From'}
              id={formID.fromID}
              setStops={setFromStops}
            />
            <StopsDataList id={formID.fromID} stops={fromStops} />
          </Col>
          <Col>
            <FormInput label={'To'} id={formID.toID} setStops={setToStops} />
            <StopsDataList id={formID.toID} stops={toStops} />
          </Col>
        </Row>
        <Row className="m-3">
          <Col className="text-center">
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
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
