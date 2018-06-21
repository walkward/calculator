import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button className={`square w-${props.width}`} style={{ background: props.bg }} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Button.defaultProps = {
  width: 1,
  bg: '#f9f9f9',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  bg: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
