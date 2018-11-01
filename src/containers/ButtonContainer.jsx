import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button/Button';
import Badge from '../components/Badge/Badge';

const propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  onClick: () => {},
  className: ''
};

const ButtonContainer = ({ on, onClick }) => (
  <Button onClick={onClick}>
    Sachith mode <Badge on={on}>{on ? 'on' : 'off'}</Badge>
  </Button>
);

ButtonContainer.propTypes = propTypes;
ButtonContainer.defaultProps = defaultProps;

export default ButtonContainer;
