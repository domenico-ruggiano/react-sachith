import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Badge.css';

const propTypes = {
  on: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  on: false,
  className: ''
};

const Badge = ({ on, className, children }) => (
  <div className={classNames('badge', { on }, className)}>
    {children}
  </div>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
