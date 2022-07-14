import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar , Nav} from 'react-bootstrap';
import { NavLink , Link } from 'react-router-dom';


 function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>

      <Link to="/" className="navbar-brand">Admin Dashboard</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         </Nav>
        <Nav>
        <li className='nav-item'>
        <NavLink to='signin' className='nav-link'>Sign In</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='signup' className='nav-link'>Sign Up</NavLink>
        </li>
       </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Header;
