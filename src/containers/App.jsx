import React, { Component, Fragment } from 'react';
import Face from '../components/Face/Face';
import Eye from '../components/Eye/Eye';
import Eyes from '../components/Eyes/Eyes';
import Mouth from '../components/Mouth/Mouth';
import ButtonContainer from './ButtonContainer';
import Eyebrows from '../components/Eyebrows/Eyebrows';
import 'typeface-montserrat';

class App extends Component {

  state = {
    x: 50,
    y: 50,
    sachith: false
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

  handleClick = () => this.setState(({ sachith }) => ({ sachith: !sachith }));

  render() {
    const { x, y, sachith } = this.state;
    return (
      <Fragment>
        <ButtonContainer on={sachith} onClick={this.handleClick} />
        <Face black={sachith}>
          <Eyes>
            <Eyebrows show={sachith} />
            <Eye percent={{ x, y }} />
            <Eye percent={{ x, y }} />
          </Eyes>
          <Mouth />
        </Face>
      </Fragment>
    )
  }
}

export default App;
