import React, {Component} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import AccountSetUp from "./AccountSetUp";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
    render() {
      return (      
        <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
               <Link to ="/">Login</Link> 
              </li>
              <li>
                <Link to ="SignUp">SignUp</Link>
              </li>
              <li>
                <Link to ="AccountSetUp">Select University</Link>
              </li>
            </ul>
          </nav>
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/SignUp" component={SignUp}/>
             <Route path="/AccountSetUp" component={AccountSetUp}/>
           </Switch>
        </div> 
      </BrowserRouter>
      );
    }
  }
export default App;