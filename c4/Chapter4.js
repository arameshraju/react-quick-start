import React,{Component} from 'react';
import StateLessComponent from './stateless';
import StatefullComponent from './statefull';

class Chapter4 extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <h1>Chapter 4 - Statefull and Stateless Components</h1>
        <StateLessComponent></StateLessComponent>
        <StatefullComponent></StatefullComponent>
      </React.Fragment>
    );
  }

}

export default  Chapter4;