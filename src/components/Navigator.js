import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigator() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
           <Navbar.Brand href="/">Show Tracker</Navbar.Brand>
            <Nav className="me-auto">
              {/*links to the pages in the navbar */}
              <Nav.Link href="/AddShow">Create</Nav.Link>
              <Nav.Link href="/getShow">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    );
}

export default Navigator;
