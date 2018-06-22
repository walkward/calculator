import React from 'react';
import { connect } from 'react-redux';

import { input } from '../actions';
import Interface from '../components/Interface';
import Button from '../components/Button';

const mapStateToProps = state => ({
  display: state.display,
  renderButton: (value, inputType, handleInput, width) => (
    <Button
      value={value}
      width={width}
      inputType={inputType}
      bg={state.display.operator === value ? '#b3ffb9' : '#f9f9f9'}
      onClick={() => handleInput(value, inputType)}
    />
  ),
});

const mapDispatchToProps = dispatch => ({
  handleInput: (value, inputType) => dispatch(input(value, inputType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Interface);
