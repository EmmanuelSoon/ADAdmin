import React, { useState } from 'react';
import {Navbar,  Nav, Container} from 'react-bootstrap';
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
                <Navbar variant = "light" expand="md" collapseOnSelect className='border-bottom'> 
                    <Container>
                        <Navbar.Brand>
                            <NavLink className="nav-link" to={'/'}>
                                <img src={logo} height="40" width="41" className="rounded-circle"
                                    alt="blank" />
                                &ensp; KeepFitWithHenry! (Admin)
                            </NavLink>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                                <NavLink className="nav-link" to={'/'}>Dashboard</NavLink>
                                <NavLink className="nav-link" to={'/reports'}>User Reports</NavLink>
                                <NavLink className="nav-link" to={'/wrongpredict'}>Photo Submissions</NavLink>
                                <NavLink className="nav-link" to={'/users'}>User details</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className="nav-link" to={'/'}>Logout</NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
        </React.Fragment>
    )
}

export default Header;