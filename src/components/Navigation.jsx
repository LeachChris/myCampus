import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class Navigation extends Component{

    render(){
        return(
        <Navbar bg="dark" variant = "dark">
            <Navbar.Brand>
                <Link to = "/">
                <img src="./Logos/gold_logo_two.png" alt="logo" className = "Logo"/>
                </Link>
           
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>

        </Navbar>
        )
    }
}

export default Navigation;