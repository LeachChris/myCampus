import React, {Component} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Timeline from "./Timeline";
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
                <Link to ="Timeline">Timeline</Link>
              </li>
            </ul>
          </nav>
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/SignUp" component={SignUp}/>
             <Route path="/Timeline" component={Timeline}/>
           </Switch>
        </div> 
      </BrowserRouter>
      );
    }
  }
export default App;