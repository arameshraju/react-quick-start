import React,{Component} from 'react';

const StateLessComponent = (props)=>{
  return(
      <selection>
      <h2>This is Stateless Component</h2>
      <p> Stateless components  with No constructor, No life cycle. 
      just return</p>
       <p>I have a prop value i.e : {props.propval}</p>
      </selection>
  )
}
export default StateLessComponent; 