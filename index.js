import React, { Component } from 'react';
import { render } from 'react-dom';
import Chapter1 from './c1/Chapter1';
import Chapter2 from './c2/Chapter2';
import Chapter3 from './c3/Chapter3';
import Chapter4 from './c4/Chapter4';
import Chapter5 from './c5/Chapter5';

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
        <Chapter5></Chapter5>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
