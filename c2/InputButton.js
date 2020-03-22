import React,{Component} from 'react';

class InputButton extends Component{
  constructor(props){
    super(props);
    this.state ={
      inputText:'Default Text',
      clickCount:0
    }
     this.handleEventOnChange = this.handleEventOnChange.bind(this);
     this.handleEventOnClick=this.handleEventOnClick.bind(this);
  }
  handleEventOnChange(e){
    this.setState({inputText:e.target.value});
  }
  handleEventOnClick(e){
    this.setState( (state) =>{ return {clickCount:(this.state.clickCount+1)}});
  }

  render(){
    return(
      <React.Fragment>
        <h2>Simple Input & Button</h2>
        <input type="text" value={this.state.inputText} onChange={this.handleEventOnChange} /> <br/>
        You have entered: {this.state.inputText} <br/>
        <button onClick={this.handleEventOnClick}>Click Me</button> <br/>
        You clicked me : {this.state.clickCount} times
      </React.Fragment>
    )
  }
}
export default InputButton;