import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Eyebrows.css';

const propTypes = {
  show: PropTypes.bool
};

const defaultProps = {
  show: false
};

const Eyebrows = ({ show }) => (
  <div className={classNames('eyebrows', { show })} />
);

Eyebrows.propTypes = propTypes;
Eyebrows.defaultProps = defaultProps;

export default Eyebrows;
