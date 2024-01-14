import Search from './components/search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <Container>
      <Row className="m-3">
        <Col className="text-center">
          <h3>Stockholm Transport Emissions Calculator</h3>
        </Col>
      </Row>
      <Search />
    </Container>
  );
}
