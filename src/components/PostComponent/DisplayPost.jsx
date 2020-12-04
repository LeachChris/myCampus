import React from "react";
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
    };



    displayBlogPost = (posts) => {
        
        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div key={index}>
                <List className="displayPost">
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Profile" src="https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-illustration-eps-229692004.jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                        primary={post.date}
                        secondary={
                            <React.Fragment>
                                <Typography 
                                component="span"
                                variant="body2"
                                color="textPrimary"
                                className="displayPostInline"
                                >
                                </Typography>
                                {post.post}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant = "inset" component="li"/>
                </List>
            </div>
        ))
    };

    render(){
        return(
            <div className>
                {this.displayBlogPost(this.state.posts)}
            </div>
        )
    }

}

export default DisplayPost;