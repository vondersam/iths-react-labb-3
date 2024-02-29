import Nav from 'react-bootstrap/Nav';

export default function NavItem({ slug }) {
  return (
    <Nav.Item key={slug}>
      <Nav.Link href={`/${slug}`}>
        {slug?.charAt(0).toUpperCase() + slug.slice(1)}
      </Nav.Link>
    </Nav.Item>
  );
}
