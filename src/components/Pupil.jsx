import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Pupil.css';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const Pupil = ({ className }) => (
  <div className={classNames('pupil', className)} />
);

Pupil.propTypes = propTypes;
Pupil.defaultProps = defaultProps;

export default Pupil;
