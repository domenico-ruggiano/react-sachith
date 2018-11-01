import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Eyebrows.css';

const propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  show: false,
  className: ''
};

const Eyebrows = ({ show, className }) => (
  <div className={classNames('eyebrows', { show }, className)} />
);

Eyebrows.propTypes = propTypes;
Eyebrows.defaultProps = defaultProps;

export default Eyebrows;
