import React,{Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Service from './service';
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users </h2>;
}


class SimpleRouter extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <React.Fragment>
        <h2>A Simple Router</h2>
         <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li><Link to="/users">Users</Link></li> 
             <li> Services
               <ol> 
                <li><Link to="/service/software">Software</Link></li>
                <li><Link to="/service/hardware">Hardware</Link></li>
                <li><Link to="/service/networking">networking</Link></li>
                </ol> 
            </li>
          </ul>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/service/:serviceId" Component={Service} />
        
           <Route path="/">
            <Home />
          </Route>
        </Switch>
         </Router>
        
      </React.Fragment>
    );
  }

}
export default SimpleRouter;