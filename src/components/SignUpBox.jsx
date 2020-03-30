import React, {Component} from "react";
import{ Link } from "react-router-dom" 
import "./SignUp.css";
import Timeline from"./Timeline.jsx";


class SignUpBox extends Component{

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["username"] = "";
            fields["password"] = "";
            fields["con_password"] = "";
            this.setState({fields:fields});
            alert("Timeline.jsx");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
          }
    
          if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
              formIsValid = false;
              errors["email"] = "*Please enter valid email-ID.";
            }
          }
        
        
        
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
        
  
        
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please include at least eight character with one uppercase, one lowercase and one number or special.";
          }
        }
         
        if (!fields["con_password"]) {
            formIsValid = false;
            errors["con_password"] = "*Please confirm your password.";
          }
    
          if (typeof fields["con_password"] !== "undefined") {
            if (fields["con_password"] !== fields["password"]) {
              formIsValid = false;
              errors["con_password"] = "*Password doesn't match.";
            }
          }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  




    render(){
    return(
        <div className="signup">

            <div>
                <h1 className="join">
                    Join MyCampus Today
                </h1>
                <img align="center" src="./Logos/gold_logo_two.png" alt="Logo" className="image" />
                <h1 className="share">
                    Share Your Experiences
                </h1>
           
            </div>
            <br>
            </br>
            <div className="Form">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormFields"> 
                        <input type="text" id="email" className="FormField-Input" placeholder="Valid .edu Email"  value={this.state.fields.email} onChange={this.handleChange} name="email"/>
                        <div class="erroremail">{this.state.errors.email}</div>
                    </div>
    
                    <div className="FormFields"> 
                        <input type="text" id="username" className="FormField-Input" placeholder="Username" value={this.state.fields.username} onChange={this.handleChange} name="username"/>
                        
                        <div class="erroruser">{this.state.errors.username}</div>
                    </div>
                    <div className="FormFields">
                        <input type="password" id="password" className="FormField-Input" placeholder="Password" value={this.state.fields.password} onChange={this.handleChange} name="password"/>
                        <div class="errorpass">{this.state.errors.password}</div>
                    </div>
                    <div className="FormFields">
                        <input type="password" id="con_password" className="FormField-Input" placeholder="Confirm Password" value={this.state.fields.con_password} onChange={this.handleChange} name="con_password"/>
                        <div class="errorcon_pass">{this.state.errors.con_password}</div>
                    </div>
                    
                    <div className="FormFields">
                        <button type="submit" className="FormField_button"> Sign Up </button>
                    </div>
                    <div className="FormField">
                        <p1>Already have a account? <Link to ="/LogIn">LogIn</Link></p1>
                    </div>
                    
                </form>

            </div>
        </div>
    )
    }
}
export default SignUpBox;