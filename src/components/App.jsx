import React, {Component} from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import SignUp from"./SignUp";
import AccountSetUp from "./AccountSetUp";
import { BrowserRouter, Route } from 'react-router-dom';
import RatingPage from './rating-page';
import RatingsListPage from './rating-list';
import Post from "./Post";
import PostsView from "./PostsView";


class App extends Component { 
  render(){

    return (      
      <BrowserRouter>
        <div>

         <Route path ="/" exact render = {
           () => {
             return(<Homepage/>)
           }
         }/>

         <Route path ="/AccountSetUp" exact render = {
          () => {
            return(<AccountSetUp/>)
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

        <Route path = "/Post" exact render = {
          () => {
            return (<Post/>)
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