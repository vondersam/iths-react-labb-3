import Card from 'react-bootstrap/Card';
import formatDuration from './../helpers/formatDuration';
import getInfo from './../helpers/getInfo';

export default function TripCard({ trip }) {
  const stats = getInfo(trip);
  console.log(stats);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{formatDuration(trip.duration)}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text></Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
