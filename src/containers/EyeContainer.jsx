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
    const { top, left } = document
      .getElementById('origin')
      .getBoundingClientRect();
    const fromCenterY = innerHeight / 2 - top;
    const fromCenterX = innerWidth / 2 - left;
    let x = ((clientX + fromCenterX) * 100) / innerWidth;
    let y = ((clientY + fromCenterY) * 100) / innerHeight;

    x = Math.min(Math.max(x, 0), 100);
    y = Math.min(Math.max(y, 0), 100);

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
