import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import Navigation from "./Navigation";

class PostsView extends Component{

state = {
count: 0
}

incrementLike = () => {
let newCount = this.state.count + 1
this.setState({
count: newCount
})
}

render(){
return(
<div className = "view-center">
<div className="view-container">

<div className="input-group">
    <div className="input-group-prepend">
        <span>
            <img className="circle-img"
                src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg"
                alt="Profile" />
        </span>
    </div>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
        placeholder="Post data">This is a sample post. Professor Omar is a great professor.</textarea>
</div>
    <Button onClick={this.incrementLike}>👍 Like {this.state.count}</Button>
    <Button variant="secondary">Comment</Button>
</div>


<div className = "view-center">
<div className="view-container">

<div className="input-group">
    <div className="input-group-prepend">
        <span>
            <img className="circle-img"
                src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg"
                alt="Profile" />
        </span>
    </div>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
        placeholder="Post data">Haven't been on Campus since Spring Break.</textarea>
</div>
    <Button onClick={this.incrementLike}>👍 Like {this.state.count}</Button>
    <Button variant="secondary">Comment</Button>
</div>
</div>

<div className = "view-center">
<div className="view-container">

<div className="input-group">
    <div className="input-group-prepend">
        <span>
            <img className="circle-img"
                src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg"
                alt="Profile" />
        </span>
    </div>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
        placeholder="Post data">Does anyone know if the bookstore is still open?</textarea>
</div>
    <Button onClick={this.incrementLike}>👍 Like {this.state.count}</Button>
    <Button variant="secondary">Comment</Button>
</div>
</div>

<div className = "view-center">
<div className="view-container">

<div className="input-group">
    <div className="input-group-prepend">
        <span>
            <img className="circle-img"
                src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg"
                alt="Profile" />
        </span>
    </div>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
        placeholder="Post data">Unless you have a parking pass, parking around school is horrible.</textarea>
</div>
    <Button onClick={this.incrementLike}>👍 Like {this.state.count}</Button>
    <Button variant="secondary">Comment</Button>
</div>

<div className = "view-center">
<div className="view-container">

<div className="input-group">
    <div className="input-group-prepend">
        <span>
            <img className="circle-img"
                src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg"
                alt="Profile" />
        </span>
    </div>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
        placeholder="Post data">Has anyone received an email back from Mekni?</textarea>
</div>
    <Button onClick={this.incrementLike}>👍 Like {this.state.count}</Button>
    <Button variant="secondary">Comment</Button>
</div>
</div>
</div>

</div>


)
}
}


export default PostsView;