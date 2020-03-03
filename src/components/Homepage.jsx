import React, {Component} from "react";
import Navigation from "./Navigation";
import Label from "./Label";
import HomepageCard from "./HomepageCard";
import {ButtonToolBar} from "react-bootstrap";

class Homepage extends Component{
render(){
return(

<div className = "homepage-container">
    <Navigation/>
        <img src="./logo.png" alt="Logo" className = "logo-container"/>
        <Label info = "Welcome to MyCampus"/>
            
               <HomepageCard 
               img = "" 
               title = "Find a Professor" 
               info = "Search for info on your professors" 
               action = "Find Professor"/>
               <HomepageCard
               img = ""
               title = "View Student Posts"
               info = "View what students are posting."
               action = "Get Started"
               />
               <HomepageCard
               img = ""
               title = "Create a Post"
               info = "Share an experience with others"
               action = "Create Post"
               />
            
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