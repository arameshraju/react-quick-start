import React,{Component} from 'react';
import TodoList from './TodoList';

class Chapter3 extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
       <React.Fragment>
        <h1>Chapter 3 - Simple Project todo list</h1>
        <TodoList></TodoList>
      </React.Fragment>
    )
  }
}
export default  Chapter3;