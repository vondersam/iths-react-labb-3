import Nav from 'react-bootstrap/Nav';
import NavItem from './navItem';

const NavBar = ({ slugs }) => {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      {slugs.map((slug) => {
        return <NavItem key={slug} slug={slug} />;
      })}
    </Nav>
  );
};
export default NavBar;
