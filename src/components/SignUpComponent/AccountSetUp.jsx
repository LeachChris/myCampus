import React, { Component } from 'react';
import "../App.css";
import UniversityConfirm from '../SearchComponent/UniversityConfirm';
import SearchBar from '../SearchComponent/SearchBar';
import universities from '../SearchComponent/universities';
import Navigation from "../Navigation";


class AccountSetUp extends Component{
  render(){
    return (
      <div className="App">
        <Navigation/>
        <h1 className= "App-intro">
          Select a University
        </h1>
        <div className="App-Component">
            <div className = "App-Component">
              <SearchBar items= {universities} />
            </div>
        </div>
        <div className="App-content">
          < UniversityConfirm text="University Confirmed" />
        </div>
      </div>
    );
  }
}

export default AccountSetUp;
