import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World!',
    };
  }

  render() {
    return <h1>{ this.state.text }</h1>;
  }
}

export default App;
