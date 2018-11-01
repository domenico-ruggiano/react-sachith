import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Mouth.css';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const Mouth = ({ className }) => (
  <div className={classNames('mouth', className)} />
);

Mouth.propTypes = propTypes;
Mouth.defaultProps = defaultProps;

export default Mouth;
