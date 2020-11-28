import React, {Component} from "react";
import {Form, Button, Nav} from "react-bootstrap";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";

class Login extends Component{
render(){

return(
<div className = "login-page-container">

  <div className="login-nav-container">
    <Navigation />
  </div>

 
  <div className = "login-container">

  <div className = "header-logo-container">
    <h1 className="loginHeader">
      Sign In To MyCampus
    </h1>
    <img src="/Logos/gold_logo_two.png" alt="Logo" className="login-logo-container"/>
    </div>
    
    <div className = "form-container">
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  />
        <Form.Text className="text-muted">
          This is what will be displayed to others.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Login
      </Button>
      <div>
      <p1>Don't have an account?<Link to = "./SignUp"> Sign Up</Link></p1>
      </div>
    </Form>
    </div>

  </div>
  
 
</div>
)

}
}

export default Login;