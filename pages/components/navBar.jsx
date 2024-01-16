import Nav from 'react-bootstrap/Nav';

const NavBar = ({ slugs }) => {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      {slugs.map((slug) => {
        return (
          <Nav.Item key={slug}>
            <Nav.Link href={`/${slug}`}>{slug}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};
export default NavBar;
