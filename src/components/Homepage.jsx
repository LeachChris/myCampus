import React, {Component} from "react";
import Navigation from "./Navigation";
import HomepageCard from "./HomepageCard";


class Homepage extends Component{
render(){
return(

<div className = "homepage-container">
    <Navigation/>
        <img src="./Logos/gold_logo_white.png" alt="Logo" className = "logo-container"/>
        <div>
            <HomepageCard 
                img = "" 
                title = "Find Reviews" 
                info = "Search for ratings and information on professors, students, and services" 
                link = ""
                action = "View Reviews"/>
            <HomepageCard
                img = ""
                title = "View Student Posts"
                info = "View what students are posting about their college experience"
                link = "./SignUp"
                action = "Get Started"
                />
            <HomepageCard
                img = ""
                title = "Create a Post"
                info = "Share a college experience for other students to learn from"
                link = ""
                action = "Create Post"
                />
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