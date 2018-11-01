import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Pupil from '../Pupil/Pupil';
import './Eye.css';

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

const Eye = ({ percent, className }) => (
  <div className={classNames('eye', className)}>
    <div className="retina">
      <Pupil percent={percent} />
    </div>
  </div>
);

Eye.propTypes = propTypes;
Eye.defaultProps = defaultProps;

export default Eye;
