import React,{Component} from 'react';

class SimpleCoponent extends Component{
    render(){
      return(
        <React.Fragment>
        <h2>This is a Simple Component</h2>
        <p>
        This to be rendered on the web page.
        </p>
        </React.Fragment>
      )
    }
  }

  export default SimpleCoponent;