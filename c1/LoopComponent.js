import React,{Component} from 'react';

class LoopComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {name:'Sowjanya A',title:'Manager',team:'OpenSource'},
        {name:'Ramesh A',title:'Developer',team:'OpenSource'},
        {name:'Raja K',title:'Marketting',team:'OpenSource'},
        {name:'Pavan S',title:'Admin',team:'OpenSource'},
        {name:'Siva R',title:'Finance',team:'OpenSource'}
        ]
    }
  }
  render(){
    const data=this.state.data;
    return(
      <React.Fragment>
        <h2>03-Loop Component</h2>
        <table>
        <th><td>Name</td><td>Title</td><td>Team</td></th>
        {data.map((row,index)=>{
          return(
          <tr key={index} ><td>{row.name}</td><td>{row.title}</td><td>{row.team}</td></tr>
          )
        })}
        </table>
      </React.Fragment>
    )
  }
}

export default LoopComponent;

