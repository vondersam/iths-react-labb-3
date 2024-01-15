import Row from 'react-bootstrap/Row';
import TripCard from './tripCard';

export default function TripList({ routes }) {
  const trips = routes?.data?.Trip?.map((trip) => {
    return <TripCard key={trip.tripId} trip={trip} />;
  });
  return <Row>{trips}</Row>;
}
