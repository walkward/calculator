import React from 'react';
import InterfaceInput from '../containers/InterfaceInput';
import DisplayUpdate from '../containers/DisplayUpdate';

const App = () => (
  <div className="calculator">
    <div className="calculator-interface">
      <DisplayUpdate />
      <InterfaceInput />
    </div>
  </div>
);

export default App;
