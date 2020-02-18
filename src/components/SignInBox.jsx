import React from "react";

function SignInBox(){
    return(
        <div className = "SignInBackgroundContainer">
            <div className = "SignInBackground">
                <h1>See What Other Students Are Saying About Your Campus</h1>
                <img src="./logo.png" alt="Logo"></img>
                <form action="/Login.jsx">
                    <input type="text" name="username" placeholder = "Username"/>
                    <input type="text" name="password" placeholder = "Password"/>
                    <button type = "submit" name = "submit">Login</button>
                </form>
                <p className = "AccountState">Don't have an account? <span>Sign Up</span></p>
            </div>
        </div>
    )
}

export default SignInBox;