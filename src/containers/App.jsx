import React, { Component, Fragment } from 'react';
import Face from '../components/Face/Face';
import Eyes from '../components/Eyes/Eyes';
import Mouth from '../components/Mouth/Mouth';
import ButtonContainer from './ButtonContainer';
import Eyebrows from '../components/Eyebrows/Eyebrows';
import EyeContainer from './EyeContainer';
import 'typeface-montserrat';

class App extends Component {

  state = {
    sachith: false
  };

  handleClick = () => this.setState(({ sachith }) => ({ sachith: !sachith }));

  render() {
    const { sachith } = this.state;
    return (
      <Fragment>
        <ButtonContainer on={sachith} onClick={this.handleClick} />
        <Face black={sachith}>
          <Eyes>
            <Eyebrows show={sachith} />
            <EyeContainer />
          </Eyes>
          <Mouth sad={sachith} />
        </Face>
      </Fragment>
    )
  }
}

export default App;
