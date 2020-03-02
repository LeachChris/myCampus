import React, {Component} from "react";
import Navigation from "./Navigation";
import Label from "./Label";

class Homepage extends Component{
render(){
return(

<div>
    <Navigation/>
    <div className = "logo-container">
        <img src="./logo.png" alt="Logo"/>
        <Label info = "Share Your Experiences"/>
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