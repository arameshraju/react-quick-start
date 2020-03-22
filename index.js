import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleComponent from './c1/SimpleComponent'
import DataComponent from './c1/DataComponent'
import LoopComponent from './c1/LoopComponent'

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <h1>Chaper-01</h1>
        <SimpleComponent></SimpleComponent>
        <hr/>
        <DataComponent></DataComponent>
        <hr/>
        <LoopComponent></LoopComponent>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
