/**
 * This is the NavBar component of the task tracker app
 * it also implements the query params for the analytics page
 */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
 * This is a simple function to calculate the date value for a week from now
 * @returns a date value for a week from now 
 */
function getLastWeek() {
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  return lastWeek;
}

/**
 * NavBar returns the react-bootstrap navbar component
 * @returns navbar
 */
const NavBar = () => {
  const now = new Date();
  const then = getLastWeek(); 

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Task Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={`../analytics?then=${then}&now=${now}`}>Analytics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;