import React, {Component} from "react";
import Navigation from "./Navigation";

class Homepage extends Component{
render(){
return(

<div>
    <Navigation/>
    <div className = "HomepageDisplay"> 
    <img src="./logo.png" alt="Logo" className = "HomepageLogo"/>
    <p></p>
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