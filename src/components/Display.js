import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ display }) => (
  <div className="interface-row">
    <input className="output" type="text" value={display.value} readOnly />
  </div>
);

Display.propTypes = {
  display: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Display;
