import React,{Component} from 'react';
import SimpleComponent from './SimpleComponent'
import DataComponent from './DataComponent'
import LoopComponent from './LoopComponent'
class Chaper1 extends Component{
  constructor(props){
    super(props);
  }
    render(){
      return(
        <div>
        <h1>Chaper-01</h1>
          <SimpleComponent></SimpleComponent>
          <hr/>
          <DataComponent></DataComponent>
          <hr/>
          <LoopComponent></LoopComponent>
      </div>
      )
    }
  
}

export default Chaper1;