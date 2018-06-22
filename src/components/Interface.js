import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const renderButton = (value, inputType, handleInput, width) => (<Button
  value={value}
  width={width}
  inputType={inputType}
  onClick={() => handleInput(value, inputType)}
/>);

const Interface = ({ handleInput }) => (
  <div>
    <div className="interface-row">
      {renderButton('clear', 'clear', handleInput, 3)}
      {renderButton('×', 'operator', handleInput, 1)}
    </div>
    <div className="interface-row">
      {renderButton(7, 'numeric', handleInput, 1)}
      {renderButton(8, 'numeric', handleInput, 1)}
      {renderButton(9, 'numeric', handleInput, 1)}
      {renderButton('-', 'operator', handleInput, 1)}
    </div>
    <div className="interface-row">
      {renderButton(4, 'numeric', handleInput, 1)}
      {renderButton(5, 'numeric', handleInput, 1)}
      {renderButton(6, 'numeric', handleInput, 1)}
      {renderButton('+', 'operator', handleInput, 1)}
    </div>
    <div className="interface-row">
      {renderButton(1, 'numeric', handleInput, 1)}
      {renderButton(2, 'numeric', handleInput, 1)}
      {renderButton(3, 'numeric', handleInput, 1)}
      {renderButton('÷', 'operator', handleInput, 1)}
    </div>
    <div className="interface-row">
      {renderButton(0, 'numeric', handleInput, 2)}
      {renderButton('.', 'numeric', handleInput, 1)}
      {renderButton('=', 'calculate', handleInput, 1)}
    </div>
  </div>
);

Interface.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default Interface;
