import React,{Component} from 'react';
import SimpleRouter from './simpleRouter';


class Chapter5 extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <h2>Chapter 5 - Simple Router</h2>
       <SimpleRouter></SimpleRouter>
      </React.Fragment>
    );
  }
 

}

export default  Chapter5;