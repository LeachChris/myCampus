import React from "react";

function SignInBox(){
    return(
    <div>
        <div className = "SignInBackgroundContainer">
            <div className = "SignInBackground">
                <h1>See What Other Students Are Saying About Your Campus</h1>
                <form action="/Login.jsx">
                    <input type="text" name="username" placeholder = "Username"/>
                    <input type="text" name="password" placeholder = "Password"/>
                    <button type = "submit" name = "submit">Login</button>
                </form>

            </div>
        </div>
     </div>
    )
}

export default SignInBox;