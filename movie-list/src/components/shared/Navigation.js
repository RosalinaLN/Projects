import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import movieImg from '../../images/movie.png'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>   
                <img
                    src={movieImg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Movie"
                />
            </Navbar.Brand>
            <Nav className="mr-auto" activeKey="/home">
                <NavLink exact to="/" className="text-white">Home</NavLink>
            </Nav>
        </Navbar>
    );
}
 
export default Navigation;