import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleComponent from './c1/SimpleComponent'
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
       
        <SimpleComponent></SimpleComponent>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
