import React from 'react';
import PropTypes from 'prop-types';
import './Mouth.css';

const propTypes = {
  sad: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  sad: false,
  className: ''
};

const Mouth = ({ sad }) => (
  <div className={sad ? 'sadMouth' : 'mouth'} />
);

Mouth.propTypes = propTypes;
Mouth.defaultProps = defaultProps;

export default Mouth;
