import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import SignInBox from "./SignInBox";


class Login extends Component{
    render () {
        return(
            <div>
                <Header/>
                <SignInBox />
                <Footer />
            </div>
        )
    }
}

export default Login;