import React, {Component} from 'react';

class DataComponent extends Component{
  constructor(props){
    super(props);
  this.state={
    name:'Ramesh Alluri',
    title:'Developer',
    team:'OpenSource'
  }
  
  }
  render(){
    return(
      <React.Fragment>
      <h2>02 - Data Component </h2>
      <table>
      <tr><td>Name</td><td>:{this.state.name}</td></tr>
      <tr><td>Title</td><td>:{this.state.title}</td></tr>
      <tr><td>Team</td><td>:{this.state.team}</td></tr>
      </table>
      </React.Fragment>
    )
  }

}
export default DataComponent;