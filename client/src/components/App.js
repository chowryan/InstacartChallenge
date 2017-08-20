import React, { Component } from 'react';

import Header from './Header';
// import SignupForm from './SignupForm';
// import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World!',
    };
  }

  render() {
    return (
      <div>
        <Header />
        {/* <SignupForm /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
