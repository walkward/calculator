import React from 'react';
import Button from './Button';
import Output from './Output';

const defaults = {
  primary: '#d2f5c6',
};

export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputValue: 0,
      operatedValue: 0,
      currentOpperator: null,
      clearNext: false,
      decimalNext: false,
    };
  }

  calculate() {
    let output = this.state.outputValue;

    switch (this.state.currentOpperator) {
      case '+':
        output = this.state.operatedValue + this.state.outputValue;
        break;
      case '-':
        output = this.state.operatedValue - this.state.outputValue;
        break;
      case '÷':
        output = this.state.operatedValue / this.state.outputValue;
        break;
      case '×':
        output = this.state.operatedValue * this.state.outputValue;
        break;
      default:
    }

    if (isNaN(output)) output = 0; // eslint-disable-line

    this.setState({
      outputValue: output,
      clearNext: true,
    });
  }

  handleButtonClick(i) {
    let output = Number(`${this.state.outputValue}${i}`);

    if (this.state.outputValue === 0) output = i; // Prevent leading 0's
    if (this.state.clearNext) output = i;
    if (this.state.decimalNext) output = Number(`${this.state.outputValue}.${i}`);

    this.setState({
      outputValue: output,
      clearNext: false,
      decimalNext: false,
    });
  }

  handleOperationClick(opperator) {
    switch (opperator) {
      case 'clear':
        this.setState({ outputValue: 0 });
        break;
      case '×':
      case '-':
      case '÷':
      case '+':
        this.setState({
          operatedValue: this.state.outputValue,
          currentOpperator: opperator,
          clearNext: true,
        });
        break;
      case '=':
        this.calculate();
        break;
      case '.':
        if (!this.state.decimalNext && !this.state.clearNext) {
          this.setState({ decimalNext: true });
        }
        break;
      default:
    }
  }

  renderButton(i, w, bg) {
    return <Button value={i} width={w} bg={bg} onClick={() => this.handleButtonClick(i)} />;
  }

  renderOperation(i, w, bg) {
    return <Button value={i} width={w} bg={bg} onClick={() => this.handleOperationClick(i)} />;
  }

  renderOutput() {
    return <Output outputValue={this.state.outputValue} />;
  }

  render() {
    return (
      <div>
        <div className="interface-row">
          {this.renderOutput()}
        </div>
        <div className="interface-row">
          {this.renderOperation('clear', 3)}
          {this.renderOperation('×', 1, defaults.primary)}
        </div>
        <div className="interface-row">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderOperation('-', 1, defaults.primary)}
        </div>
        <div className="interface-row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderOperation('+', 1, defaults.primary)}
        </div>
        <div className="interface-row">
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderOperation('÷', 1, defaults.primary)}
        </div>
        <div className="interface-row">
          {this.renderButton(0, 2)}
          {this.renderOperation('.')}
          {this.renderOperation('=', 1, defaults.primary)}
        </div>
      </div>
    );
  }
}
