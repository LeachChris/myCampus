import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";


class Navigation extends Component{

    render(){
        return(
        <Navbar bg="dark" variant = "dark">
            <Navbar.Brand>
            <img src="./logo.png" alt="logo" className = "Logo"/>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/AccountSetUp">Set Up</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                <Nav.Link href="/RatingPage">Rating</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}

export default Navigation;