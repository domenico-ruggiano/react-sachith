import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Pupil.css';

const propTypes = {
  percent: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  className: PropTypes.string
};

const defaultProps = {
  percent: { x: 50, y: 50 },
  className: ''
};

const Pupil = ({ percent, className }) => {
  const { x, y } = percent;
  const style = {
    top: `${y}%`,
    left: `${x}%`
  };
  return (
    <div className={classNames('pupil', className)} style={style} />
  );
};

Pupil.propTypes = propTypes;
Pupil.defaultProps = defaultProps;

export default Pupil;
