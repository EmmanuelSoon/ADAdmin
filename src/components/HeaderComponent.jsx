import React, { useState } from 'react';
import {Navbar,  Nav, Container, Offcanvas } from 'react-bootstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import logo from '../logo.jpg'

function handleLogOut(){
    localStorage.clear();
    window.location.reload(true);
    //this.props.location.push("http://localhost:8080")
}

function Header(){


    return(
        <React.Fragment>
                <Navbar variant = "dark" bg="dark" expand={false} collapseOnSelect > 
                    <Container>
                        <Navbar.Brand>
                            <NavLink className="nav-link mt-1" to={'/'}>
                                <img src={logo} height="40" width="41" className="rounded-circle"
                                    alt="blank" />
                                &ensp; KeepFitWithHenry! (Admin)
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Offcanvas id="responsive-navbar-nav">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='lead fs-4 border-bottom border-dark mt-2' >
                                <NavLink to ={'/'} style={{ textDecoration: 'none', color:'black' }}>
                                <img src={logo} height="50" width="50" className="rounded-circle" alt="blank" /> KeepFitWithHenry! (Admin)
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='lead'>
                            <Nav className="me-auto">
                                    <NavLink className="nav-link" to={'/'}>Dashboard</NavLink>
                                    <NavLink className="nav-link" to={'/reports'}>User Reports</NavLink>
                                    <NavLink className="nav-link" to={'/wrongpredict'}>Photo Submissions</NavLink>
                                    <NavLink className="nav-link" to={'/users'}>User details</NavLink>
                            </Nav>
                            <Nav>
                                <NavLink className="nav-link" to={'/'}>Logout</NavLink>
                            </Nav>
                        </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>

                </Navbar>
        </React.Fragment>
    )
}

export default Header;