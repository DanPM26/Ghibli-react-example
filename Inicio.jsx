import React from 'react'
import { Container, Navbar , Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom'





const Inicio = () => {
  return (
    <>
    <Navbar bg="light" epand ="lg">
      <Container>
      <Navbar.Brand href="">Studio Ghibli </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/peliculas">
                Peliculas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Home</h1>
      <Outlet></Outlet>
    </>
  )
}

export default Inicio