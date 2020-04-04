import React,{Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useRouteMatch,
  useParams
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users </h2>;
}
function Service() {
  let {serviceId}  = useParams();
  return (<h2>Service {serviceId}</h2>);
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
          <Route path="/service/:serviceId" >
            <Service/>
          </Route>
        
           <Route exact path="/">
            <Home />
          </Route>
        </Switch>
         </Router>
        
      </React.Fragment>
    );
  }

}
export default SimpleRouter;