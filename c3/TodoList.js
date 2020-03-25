import React,{Component} from 'react';

class TodoList extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <h2>Shopping List</h2>
        <div>
          <form>
            <input type="text"/>
            <button type="submit">Save</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default TodoList;