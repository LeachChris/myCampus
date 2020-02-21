import React, {Component} from "react";


class SignInBox extends Component{
    render(){
        return(
            <div className="signInContainer">
                <h1>See What Other Students Are Saying About Your Campus</h1>
                <img src="./logo.png" alt="Logo" />
                <form action="/Login.jsx">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit" className="btn btn-secondary" name="submit">Login</button>
                </form>
            </div>
                )
    }

}

export default SignInBox;