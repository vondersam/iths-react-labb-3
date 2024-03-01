import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import formatDuration from '../helpers/formatDuration';
import getTripInfo from '../helpers/getTripInfo';
import unifyTripInfo from '../helpers/unifyTripInfo';
import TransportCardPart from './transportCardPart';
import RouteMap from './routeMap';

export default function TripCard({ trip }) {
  const info = getTripInfo(trip);
  const unifiedInfo = unifyTripInfo(info);
  const [open, setOpen] = useState(false);
  return (
    <Card className="m-1">
      <div className="row no-gutters">
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{formatDuration(trip.duration)}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {unifiedInfo.stations.join(' > ')}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              <TransportCardPart unifiedInfo={unifiedInfo} />
            </Card.Subtitle>
            <Card.Text>{unifiedInfo.totaldistance.toFixed(2)} km</Card.Text>
            <Card.Text>
              {unifiedInfo.totalEmissions.toFixed(2)} gCO2e/pkm per person
            </Card.Text>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <>
            <Button
              variant="btn-primary-outline"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {open ? 'Hide map' : 'Show map'}
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text position-relative">
                {open && <RouteMap info={info} />}
              </div>
            </Collapse>
          </>
        </div>
      </div>
    </Card>
  );
}
