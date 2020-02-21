import React, { Component } from 'react';
import './App.css';
import UniversityConfirm from './UniversityConfirm';
import SearchBar from './SearchBar';
import universities from './universities';


class Integrate extends Component{
  render(){
    return (
      <div className="App">
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

export default Integrate;
