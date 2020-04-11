import React from 'react';
import {Button} from 'react-bootstrap';



function Post(){
return(
    
<div className = "post-center">
<div className="post-container">
    <label className = "post-header">Create Post</label>
    <div className="input-group">
        <div className="input-group-prepend">
            <span>
                <img className = "circle-img" src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg" alt="Profile"/>
            </span>
        </div>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Tell us about your experience"></textarea>
    </div>
    <Button variant = "secondary">Cancel</Button>
    <Button variant = "primary">Post</Button>
</div>
</div>
)
}


export default Post;