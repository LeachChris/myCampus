import React, { Component } from 'react';
import StarRating from "./star-rating";
import Navigation from "./Navigation";
import "./rating-page.css";

class RatingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      rating: 0,
      user: ''
    };
  }



  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  setRating = rating => {
    this.setState({ rating: rating });
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
        <div className="form-input">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
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
        <div className="actions">
          <button type="submit" onClick={this.saveRating}>
            Submit Rating
          </button>

          <div className="form-input rating">
          <label htmlFor="rating">Overall Rating:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        </div>
      </div>
    </div>
    );
  }
}


export default RatingPage;