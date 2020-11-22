import React, {Component} from "react";
import Navigation from "./Navigation";
import HomepageCard from "./HomepageCard";
import CreatePost from "./CreatePost";
import SearchBar from "./SearchBar"


class Homepage extends Component{

  
render(){

return(

<div className = "homepage-container">
    <Navigation/>
        <img src="./Logos/gold_logo_white.png" alt="Logo" className = "logo-container"/>
        <div>
            <HomepageCard 
                img = "" 
                title = "Search for Your Campus" 
                info = "See what other students are sharing about your campus." 
                link = "./AccountSetUp"
                action = "Search Now"
                />
            <HomepageCard
                img = ""
                title = "Join Your Virutal Campus Today"
                info = "Become part of a virtual community of students and professors."
                link = "./SignUp"
                action = "Get Started"
                />
            <HomepageCard
                img = ""
                title = "Create a Post"
                info = "Share a college experience for other students to learn from"
                link = "./Post"
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