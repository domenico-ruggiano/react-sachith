import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Face.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  className: ''
};

const Face = ({ className, children }) => (
  <div className={classNames('face', className)}>
    {children}
  </div>
);

Face.propTypes = propTypes;
Face.defaultProps = defaultProps;

export default Face;
