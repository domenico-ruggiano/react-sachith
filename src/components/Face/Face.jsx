import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Face.css';

const propTypes = {
  black: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  black: false,
  className: ''
};

const Face = ({ black, className, children }) => (
  <div className={classNames('face', { black })}>
    {children}
  </div>
);

Face.propTypes = propTypes;
Face.defaultProps = defaultProps;

export default Face;
