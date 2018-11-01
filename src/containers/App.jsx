import React, { Component } from 'react';
import Face from '../components/Face';
import Eye from '../components/Eye';
import Eyes from '../components/Eyes';
import Mouth from '../components/Mouth';

class App extends Component {
  render() {
    return (
      <Face>
        <Eyes>
          <Eye />
          <Eye />
        </Eyes>
        <Mouth />
      </Face>
    )
  }
}

export default App;
