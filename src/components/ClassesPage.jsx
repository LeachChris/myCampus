import React, { Component } from 'react';
import StarRating from "./star-rating";
import Navigation from "./Navigation";
import "./ClassesPage.css";

class ClassesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      department: '',
      rating: 0,
      description: ''
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
      <div className="classes-form">
        <div className="heading">Classes</div>

        <div className="form-input2">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input2">
          <label htmlFor="name">Department :</label>
          <input
            type="text"
            name="department"
            id="department"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Informative:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Difficulty:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Usefullness:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>

        <div className="form-input3" align="left" >
          <label htmlFor="description" >Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={this.handleChange}
          />
        </div>

        <div className="actions-button">
          <button type="submit" onClick={this.saveRating}>
            Submit Class
          </button>
        </div>
      </div>
    </div>
    );
  }
}


export default ClassesPage;