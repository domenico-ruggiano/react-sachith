import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const propTypes = {
  badge: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  onClick: () => {},
  badge: '',
  className: ''
};

const Button = ({ badge, onClick, className, children }) => (
  <button
    type="button"
    className={classNames('button', className)}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
