import React, { Component, Fragment } from 'react';
import Hammer from 'hammerjs';
import Eye from '../components/Eye/Eye';

class EyeContainer extends Component {
  state = {
    x: 50,
    y: 50
  };

  componentDidMount() {
    const hammer = new Hammer(document.body);
    hammer.on('pan', this.handleCursor);
    window.addEventListener('mousemove', this.handleCursor);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleCursor);
  }

  handleCursor = e => {
    const mobile = e.srcEvent;
    const event = e.srcEvent || e;
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = (clientX * 100) / innerWidth;
    const y = (clientY * 100) / innerHeight;

    if (!x && !y && mobile) return;

    this.setState(() => ({ x, y }));
  };

  render() {
    const { x, y } = this.state;
    return (
      <Fragment>
        <Eye percent={{ x, y }} />
        <Eye percent={{ x, y }} />
      </Fragment>
    );
  }
}

export default EyeContainer;
