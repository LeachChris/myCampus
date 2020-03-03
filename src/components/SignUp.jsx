import React, {Component} from "react";
import { HashRouter as Router, Route, Link, NavLink} from "react-router-dom";
import Navigation from "./Navigation";
import Login from "./Login";
import SignUpBox from  "./SignUpBox";
import "./SignUp.css";


class SignUp extends Component{
    render(){
    return(
        <Router basename="/react-auth-ui/">
            <div className="signup">
                <Navigation/>

            
            <Route exact path="/" component={SignUpBox}>
                </Route>
            <Route path="/LogIn" component={Login}>
                </Route>
       
            </div>
        </Router>
    )
    }
}

export default SignUp;