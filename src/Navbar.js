import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Navbars() {
  return (
    <>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'}  style={{textDecoration:"none",color:"aqua"}}>Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={'/mike'} style={{textDecoration:"none" ,color:"aqua"}}>Class</Link></Nav.Link>
            <Nav.Link href="#features"><Link to={'/'} style={{textDecoration:"none" ,color:"aqua"}}>Function</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to={'/tyson'} style={{textDecoration:"none" ,color:"aqua"}}>Arrow</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
