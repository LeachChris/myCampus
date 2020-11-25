import React, {Component} from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import SignUp from"./SignUp";
import AccountSetUp from "./SignUpComponent/AccountSetUp";
import { BrowserRouter, Route } from 'react-router-dom';
import RatingPage from './rating-page';
import RatingList from './RatingComponent/rating-list'
import ClassesPage from './ClassesPage';
import CreatePost from "./CreatePost";
import PostsView from "./PostsView";
import  DisplayPost  from "./DisplayPost";


class App extends Component { 
  render(){

    return (      
      <BrowserRouter>
        <div>

         <Route path ="/" exact render = {
           () => {
             return(<DisplayPost/>)
           }
         }/>

         <Route path ="/AccountSetUp" exact render = {
          () => {
            return(<AccountSetUp/>)
          }
         }/>

         <Route path ="/ClassesPage" exact render = {
          () => {
            return(<ClassesPage/>)
          }
         }/>

        <Route path ="/Login" exact render = {
          () => {
            return(<Login/>)
          }
         }/>

        <Route path ="/SignUp" exact render = {
          () => {
            return(<SignUp/>)
          }
         }/>

        <Route path = "/RatingPage" exact render = {
          () => {
            return (<RatingPage/>)
          }
        }/>

        <Route path = "/RatingList" exact render = {
          () => {
            return (<RatingList/>)
          }
        }/>

        <Route path = "/Post" exact render = {
          () => {
            return (<CreatePost/>)
          }
        }/>

        <Route path = "/viewPost" exact render = {
          () => {
            return (<PostsView/>)
          }
        }/>

        </div>
      </BrowserRouter>
    )

  }
}
export default App;