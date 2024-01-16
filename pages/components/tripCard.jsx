import Card from 'react-bootstrap/Card';
import formatDuration from '../helpers/formatDuration';
import getTripInfo from '../helpers/getTripInfo';
import unifyTripInfo from '../helpers/unifyTripInfo';
import TransportCardPart from './transportCardPart';

export default function TripCard({ trip }) {
  const info = getTripInfo(trip);
  const unifiedInfo = unifyTripInfo(info);
  return (
    <Card className="m-1">
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
    </Card>
  );
}
