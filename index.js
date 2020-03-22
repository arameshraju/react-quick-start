import React, { Component } from 'react';
import { render } from 'react-dom';
import Chapter1 from './c1/Chapter1';
import Chapter2 from './c2/Chapter2';
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
       <Chapter2></Chapter2>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
