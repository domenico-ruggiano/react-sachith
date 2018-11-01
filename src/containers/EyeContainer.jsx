import React, { Component, Fragment } from 'react';
import Eye from '../components/Eye/Eye';

class EyeContainer extends Component {

  state = {
    x: 50,
    y: 50
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleCursor);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleCursor);
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
    const {  x, y } = this.state;
    return (
      <Fragment>
        <Eye percent={{ x, y }} />
        <Eye percent={{ x, y }} />
      </Fragment>
    )
  }
}

export default EyeContainer;
