import React,{Component} from 'react';

class FormValidation extends Component{
  constructor(props){
    super(props);
    this.state={
      formName:'',formAge:'',formCity:''
    };
    this.handleEventChange=this.handleEventChange.bind(this);
  }
  handleEventChange(e){
    console.log(e.target.name);
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return (
      <React.Fragment>
      <h2>Form Validation & Submission Next Level</h2>
      <form>
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
      form Data: N: {this.state.formName} | A: {this.state.formAge} |C: {this.state.formCity}
            <br/>
      Last Submitted Data: N: {this.state.submittedName} | A: {this.state.submittedAge} |C: {this.state.submittedCity}
      </React.Fragment>
    )
  }
}

export default FormValidation;