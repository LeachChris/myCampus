import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Navigation from "../Navigation";



class CreatePost extends React.Component {


state = {
    post: ''
};

handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name]: value
    });

};

submit = (event) => {
    event.preventDefault();

    const payload = {
        post: this.state.post
    };

    axios({
        url: '/api/save',
        method: 'POST',
        data: payload
    })
    .then(() => {
        console.log('Data has been sent to the server');
    })
    .catch(() => {
        console.log('Internal server error');
    });;
};

render() {

    console.log('State: ', this.state);
    
return(
    
<div>
    <Navigation/>
<div className = "post-center">
<form onSubmit = {this.submit}>
<div className="post-container">
    <label className = "post-header">Create Post</label>
    <div className="input-group">
        <div className="input-group-prepend">
            <span>
                <img className = "circle-img" src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg" alt="Profile"/>
            </span>
        </div>
        <textarea
            className="form-control"
            name="post"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Tell us about your experience"
            value = {this.state.post}
            onChange = {this.handleChange}
            >
        </textarea>
    </div>
    <button>Submit</button>
    {/*<Button variant = "secondary">Cancel</Button>
    <Button variant = "primary">Post</Button> */}
</div>
</form>
</div>
</div>
)
}
}

export default CreatePost;