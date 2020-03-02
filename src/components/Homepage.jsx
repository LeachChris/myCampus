import React, {Component} from "react";
import Navigation from "./Navigation";
import Label from "./Label";
import HomeButtons from "./HomeButtons";
import {ButtonToolBar} from "react-bootstrap";

class Homepage extends Component{
render(){
return(

<div className = "homepage-container">
    <Navigation/>
        <img src="./logo.png" alt="Logo" className = "logo-container"/>
        <Label info = "Welcome to MyCampus"/>
            <div>
                <HomeButtons info = "Create a Post"/>
                <HomeButtons info = "Find a Professor"/>
            </div>
</div>


)
}
}

export default Homepage;

// import React, {Component} from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SignInBox from "./SignInBox";


// class Homepage extends Component{
// render () {
// return(
// <div>
    // <h1>Hello</h1>
    // </div>
// )
// }
// }

// export default Homepage;