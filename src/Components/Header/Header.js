import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// to do : change header to matchgame oflife
export default function Header() {
   
    return (
        <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="https://miguelalmodo.com">Miguel's Asteroid</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="https://library.miguelalmodo.com/">Bookshelf</Nav.Link>
            <Nav.Link href="https://nostree.me/npub1ajt9gp0prf4xrp4j07j9rghlcyukahncs0fw5ywr977jccued9nqrcc0cs">Social Media</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}