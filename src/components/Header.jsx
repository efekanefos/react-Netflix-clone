import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/navbar.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbarback fixed-top">
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo ms-5 me-2"
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="ms-2">
              <Link className="text-white underline" to="/">
                Anasayfa
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-2">
              <Link className="text-white underline" to="/tvseries">
                Diziler
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-2">
              <Link className="text-white underline" to="/movies">
                Filmler
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-2">
              <Link className="text-white underline" to="/newpopular">
                Yeni ve Popüler
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-2">
              <Link className="text-white underline" to="/mylist">
                Listem
              </Link>
            </Nav.Link>
          </Nav>
          <React.Fragment>
            <i className="fas fa-search me-4 fs-5 text-white"></i>
            <i className="fas fa-gift me-4 fs-5 text-white"></i>
            <i className="fas fa-bell me-4 fs-5 text-white"></i>
            <i className="fas fa-user me-5 fs-5 text-white"></i>
          </React.Fragment>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
