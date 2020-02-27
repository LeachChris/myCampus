import React, {Component} from "react";
import{ Link } from "react-router-dom" 
import "./SignUp.css";


class SignUpBox extends Component{
    render(){
    return(
        <div className="signup">

            <div>
                <h1 className="join">
                    Join MyCampus Today
                </h1>
                <img align="center" src="./logo1.png" alt="Logo" className="image" />
                <h1 className="share">
                    Share Your Experiences
                </h1>
           
            </div>
            <br>
            </br>
            <div className="Form">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormFields">
                        <input type="text" id="email" className="FormField-Input" placeholder="Valid .edu Email" name="email"/>
                    </div>
                    <div className="FormFields">
                        <input type="text" id="username" className="FormField-Input" placeholder="Username" name="username"/>
                    </div>
                    <div className="FormFields">
                        <input type="password" id="password" className="FormField-Input" placeholder="Password" name="password"/>
                    </div>
                    <div className="FormFields">
                        <input type="password" id="con_password" className="FormField-Input" placeholder="Confirm Password" name="con_password"/>
                    </div>
                    
                    <div className="FormFields">
                        <button className="FormField_button"> Sign Up </button>
                    </div>
                    <div className="FormField">
                        <p>Already have a account? <Link to ="/LogIn">LogIn</Link></p>
                    </div>
                    
                </form>

            </div>
        </div>
    )
    }
}
export default SignUpBox;