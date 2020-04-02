import React,{Component} from 'react';

class StatefullComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <selection>
      <h2>This is State Component</h2>
      <p> Stateless components   this will have all consturctors lifecycles etc. 
      just return</p>
      <p>I have a prop value i.e : {this.props.propval}</p>
      </selection>
    )
  }
}
export default StatefullComponent;