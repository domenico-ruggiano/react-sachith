import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Eye.css';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: ''
};

const Eye = ({ className }) => (
  <div className={classNames('eye', className)} />
);

Eye.propTypes = propTypes;
Eye.defaultProps = defaultProps;

export default Eye;
