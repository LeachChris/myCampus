import React from 'react';
import {Button} from 'react-bootstrap';



function Post(){
return(
    
<div className = "post-center">
<div className="post-container">
    <h1 className = "post-header"> Username -</h1>
    <h1 className = "post-header">Create Post</h1>
    <div className="input-group">
        <div className="input-group-prepend">
            <span>

            </span>
        </div>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <Button variant = "secondary">Post</Button>
</div>
</div>
)
}


export default Post;