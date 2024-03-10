'use client';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body mb-4">
        <Navbar.Brand href="/">
          {/* Show on screens smaller than md */}
          <div className="d-md-none">STEC</div>
          {/* Show on screens bigger than md */}
          <div className="d-none d-md-block">
            Stockholm Transport Emissions Calculator
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/how">How</Nav.Link>
            <Nav.Link href="/what">What</Nav.Link>
            <Nav.Link href="/why">Why</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
