import React, { Component } from 'react';
import './rating-list.css';

class RatingsListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      ratings: [],
      user:''
    };
  }

  render(){
    return (
      <table className="ratings-list">
        <thead>
          <tr>
            <th>Professor</th>
            <th>Description</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {this.state.ratings.map((rating) => {
          return (
            <tr className="rating" key={rating.id}>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
              <td className="rating-value">{rating.rating}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}

export default RatingsListPage;