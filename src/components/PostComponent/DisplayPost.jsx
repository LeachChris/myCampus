import React from "react";
import axios from "axios";

class DisplayPost extends React.Component {

    state = {
        date: "",
        description: "",
        posts: [],
    }

    componentDidMount = () => {
        this.getPost();
    };

    getPost = () => {
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            this.setState({posts: data})
            console.log("data received");
        })
        .catch(() => {
            alert("error receving data");
        })
    }

    displayBlogPost = (posts) => {

        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div key={index}>
            <h3>{post.date}</h3>
            <p>{post.post}</p>
            </div>
        ))
    };

    render(){
        return(
            <div className="post-">
                {this.displayBlogPost(this.state.posts)}
            </div>
        )
    }

}

export default DisplayPost;