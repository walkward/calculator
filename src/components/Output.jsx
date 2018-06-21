import React from 'react';
import PropTypes from 'prop-types';

export default function Output(props) {
  return (
    <input className="output w-4" type="number" value={props.outputValue} />
  );
}

Output.propTypes = {
  outputValue: PropTypes.number.isRequired,
};
