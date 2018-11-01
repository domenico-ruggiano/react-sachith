import React, { Component } from 'react';
import Face from '../components/Face/Face';
import Eye from '../components/Eye/Eye';
import Eyes from '../components/Eyes/Eyes';
import Mouth from '../components/Mouth/Mouth';

class App extends Component {

  state = {
    x: 50,
    y: 50
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleCursor);
  }

  handleCursor = e => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    this.setState(() => ({
      x: clientX * 100 / innerWidth,
      y: clientY * 100 / innerHeight
    }))
  };

  render() {
    const { x, y } = this.state;
    return (
      <Face>
        <Eyes>
          <Eye percent={{ x, y }} />
          <Eye percent={{ x, y }} />
        </Eyes>
        <Mouth />
      </Face>
    )
  }
}

export default App;
