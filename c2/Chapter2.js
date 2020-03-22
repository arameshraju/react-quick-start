import React,{Component} from 'react';
import InputButton from './InputButton';

class Chapter2 extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <h1>Chapter 2 - Forms </h1>
        <InputButton></InputButton>

      </React.Fragment>
    )
  }
}

export default Chapter2;