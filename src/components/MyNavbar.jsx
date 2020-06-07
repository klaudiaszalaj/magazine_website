import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import LOGOLAFB from '../photos/LOGOLAFB.png';


const MyNavbar = () => {
    
    return(
        <Navbar expand="lg" bg="light" variant="light">
            <Link to="/"><img id="hidden-logo" className="d-sm-none" src={LOGOLAFB} width="100" alt=""/></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">   <i id="toggler" className="fas fa-bars"></i> </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id="links" className="mr-auto">
                    <Nav.Link className="mr-4" href="/">Home</Nav.Link>
                    <Nav.Link className="mr-4" href="/articles">Articles</Nav.Link>
                    <Nav.Link className="mr-4" href="/author-page">About author</Nav.Link>
                    <Nav.Link className="mr-4" href="/meetings">Meetings</Nav.Link>
                </Nav>
                <Nav id="links-right" className="mr-4 mr-md-2">
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Item className="ml-3">
                        <h4>\</h4>
                    </Nav.Item>
                    <Nav.Link href="/register">
                        Sign up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar