import React,{Component} from 'react';

class SimpleForm extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',age:0
    };
    this.handleEventNameChange=this.handleEventNameChange.bind(this);
     this.handleEventAgeChange=this.handleEventAgeChange.bind(this);
    this.handleEventSubmit=this.handleEventSubmit.bind(this);

  }

  handleEventNameChange(e){
      this.setState({name:e.target.value});
  }
   handleEventAgeChange(e){
      this.setState({age:e.target.value});
  }
  handleEventSubmit(e){
     e.preventDefault();
     this.setState({
       submittedName:this.state.name,
       submittedAge:this.state.age
       });
  }

  render(){
    return(
      <React.Fragment>
      <h2>Simple Form </h2>
      <form onSubmit={this.handleEventSubmit}>
      Name :  <input type="text" value={this.state.name} onChange={this.handleEventNameChange} /><br/>
        Age :  <input type="number" value={this.state.age} onChange={this.handleEventAgeChange} /><br/>
      <button  type="submit" >Submit</button> 
      </form>
      <br/>
      On Entry Data :  Name :  {this.state.name}  | Age :  {this.state.age}<br/>
         Laste Submitted data :  Name :  {this.state.submittedName} |age :  {this.state.submittedAge}
    </React.Fragment>
    )
  }
}
export default SimpleForm;