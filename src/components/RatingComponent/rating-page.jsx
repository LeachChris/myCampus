import React, { Component } from 'react';
import StarRating from "./star-rating";
import Navigation from "../Navigation";
import "./rating-page.css";
import axios from 'axios';

class RatingPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     description: '',
  //     rating: 0,
  //     user: ''
  //   };
  // }



  // handleChange = ev => {
  //   this.setState({
  //     [ev.target.name]: ev.target.value
  //   });
  // };

  // setRating = rating => {
  //   this.setState({ rating: rating });
  // };

  state = {
    rating: '',
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
      rating: this.state.rating
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log(('Rating data has been sent to the server'));
    })
    .catch(() => {
      console.log('Internal server error');
    });
  };

  render() {
    return (
    <div className="App">
     <Navigation/>
      <div className="rating-form">
        <div className="heading">Rate A Professor</div>
        <div className="form-input">
          <label htmlFor="name">Professor :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Enthusiasm:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Helpfulness:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Knowledge:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Response Time:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Grade Posting Time:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>

        <div className="form-input">
          <label htmlFor="description" >Comments:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Give a description of your experience"
            onChange={this.handleChange}
          />
        </div>
        <div className="actions-button">
          <button type="submit" onClick={this.submit}>
            Submit Rating
          </button>
        </div>
      </div>
    </div>
    );
  }
}


export default RatingPage;