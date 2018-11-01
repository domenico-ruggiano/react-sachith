import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Eyes.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  className: ''
};

const Eyes = ({ className, children }) => (
  <div className={classNames('eyes', className)}>{children}</div>
);

Eyes.propTypes = propTypes;
Eyes.defaultProps = defaultProps;

export default Eyes;
