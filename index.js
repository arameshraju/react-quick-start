import React, { Component } from 'react';
import { render } from 'react-dom';
import Chaper1 from './c1/Chaper1';
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
      <Chaper1></Chaper1>
      
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
