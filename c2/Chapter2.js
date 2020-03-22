import React,{Component} from 'react';
import InputButton from './InputButton';
import SimpleForm from './SimpleForm';
import FormValidation from './FormValidation'

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
        <FormValidation></FormValidation>

      </React.Fragment>
    )
  }
}

export default Chapter2;