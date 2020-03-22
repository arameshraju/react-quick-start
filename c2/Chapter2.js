import React,{Component} from 'react';
import InputButton from './InputButton';
import SimpleForm from './SimpleForm'

class Chapter2 extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <h1>Chapter 2 - Forms </h1>
        <InputButton></InputButton>
        <SimpleForm></SimpleForm>

      </React.Fragment>
    )
  }
}

export default Chapter2;