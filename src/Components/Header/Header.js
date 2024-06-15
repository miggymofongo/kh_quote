import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
   
    return (
        <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="https://miguelalmodo.com">Miguel's Asteroid</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#https://library.miguelalmodo.com/">Bookshelf</Nav.Link>
            <Nav.Link href="#https://miguelalmodo.com/blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}