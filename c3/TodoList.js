import React,{Component} from 'react';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
        inputText:'',
        entry:'',
        todoList:[
          {task:'Item1',status:'Checked'},
          {task:'Item2',status:''},
          {task:'Item3',status:''}
        ]

    };
    this.handleEventInputChange=this.handleEventInputChange.bind(this);
    this.handleEventSubmit=this.handleEventSubmit.bind(this);
  }

  handleEventInputChange(e){
    this.setState({
      inputText:e.target.value,
    });
  }
  handleEventSubmit(e){
    e.preventDefault();
   this.setState({
      entry:this.state.inputText
    });
  }


  render(){
    const data=this.state.todoList;
    return(
      <React.Fragment>
        <h2>Shopping List</h2>
        <div>
          <ul>
            {data.map((row,index)=>{
              return (
                 <li key={index}><input type="checkbox"  checked={row.status} />  {row.task} </li> 
              )
            })}
          </ul>
        </div>
        <div>
          <form onSubmit={this.handleEventSubmit}>
            <input type="text" value={this.state.inputText} onChange={this.handleEventInputChange}/>
            <button type="submit" >Save</button>
          </form>
          <br/>
          {this.state.entry}
        </div>
      </React.Fragment>
    );
  }
}
export default TodoList;