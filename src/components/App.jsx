import React, {Component} from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import AccountSetUp from "./AccountSetUp";
import { BrowserRouter, Route } from 'react-router-dom';

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

        </div>
      </BrowserRouter>
    )

  }
}
export default App;