import React, {Component} from "react";
import { HashRouter as Router, Route, Link, NavLink} from "react-router-dom";
import Navigation from "./Navigation";
import SignInBox from "./SignInBox";
import SignUpBox from  "./SignUpBox";
import "./SignUp.css";


class SignUp extends Component{
    render(){
    return(
        <Router basename="/react-auth-ui/">
            <div className="signup">
                <Navigation/>
                <div className="PageSwitcher">
                    <NavLink to = "/LogIn" activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">LogIn</NavLink>
                    <NavLink exact to ="/"  activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">SignUp</NavLink>
                </div>
            
            <Route exact path="/" component={SignUpBox}>
                </Route>
            <Route path="/LogIn" component={SignInBox}>
                </Route>
       
            </div>
        </Router>
    )
    }
}

export default SignUp;