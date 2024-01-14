import SearchFields from './components/searchFields';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <Container>
      <Row>
        <h1>Stockholm Transport Emissions Calculator</h1>
        <SearchFields />
      </Row>
      <Row></Row>
    </Container>
  );
}
