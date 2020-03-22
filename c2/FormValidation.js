import React,{Component} from 'react';

class FormValidation extends Component{
  constructor(props){
    super(props);
    this.state={
      formName:'',formAge:'',formCity:'',
      validationErrors:{}
    };
    this.handleEventChange=this.handleEventChange.bind(this);
    this.handleEventOnSubmit=this.handleEventOnSubmit.bind(this);
  }
  handleEventChange(e){
     this.setState({
      [e.target.name]:e.target.value
    })
  }
  validateForm(){
    const error={};
    if(!this.state.formName){
      error['errorName']='Name should name be empty'
    }
    if(!this.state.formAge){
      error['errorAge']='Age should name be empty'
    }else{
      const n= parseInt(this.state.formAge);
      console.log(n);
      if(!(n>18 && n <65)){
         error['errorAge']='Age should be between 18 to 65'
      }
    }
    if(!this.state.formCity){
      error['errorCity']='City should name be empty'
    }
    this.setState({
      validationErrors:error
    })
  }
  handleEventOnSubmit(e){
    e.preventDefault();
    this.validateForm();
  }
  
  render(){
    return (
      <React.Fragment>
      <h2>Form Validation & Submission Next Level</h2>
      <form onSubmit={this.handleEventOnSubmit}>
      <table>
      <tr> 
        <td>Name</td><td><input type="text" name="formName" value={this.state.formName} onChange={this.handleEventChange} /></td>
      </tr>
      <tr> 
        <td>Age</td><td><input type="number" name="formAge" value={this.state.formAge} onChange={this.handleEventChange}/></td>
      </tr>
      <tr> 
        <td>City</td><td><input type="text" name="formCity" value={this.state.formCity} onChange={this.handleEventChange} /></td>
      </tr>

      </table>  
      <button type="submit">Submit</button>
      </form>
    <br/>
    <span class="error">
    errors if any <br/>
          {this.state.validationErrors.errorName}<br/>
      {this.state.validationErrors.errorAge}<br/>
      {this.state.validationErrors.errorCity}<br/>

</span>
      <br/>
      form Data: N: {this.state.formName} | A: {this.state.formAge} |C: {this.state.formCity}
            <br/>
      Last Submitted Data: N: {this.state.submittedName} | A: {this.state.submittedAge} |C: {this.state.submittedCity}
      <br/>

      </React.Fragment>
    )
  }
}

export default FormValidation;