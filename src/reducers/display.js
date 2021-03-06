import { formatNumber, calculate } from '../utils';

const defaults = {
  value: '0',
  operator: null,
  firstTerm: null,
  clearNext: false,
};

export default (state = defaults, action) => {
  switch (action.inputType) {
    case 'numeric':
      return {
        ...state,
        clearNext: false,
        value: state.clearNext === false
          ? formatNumber(state.value, action.value)
          : formatNumber(action.value),
      };
    case 'clear':
      return {
        ...state,
        value: '0',
      };
    case 'operator':
      return {
        ...state,
        clearNext: true,
        firstTerm: state.value,
        operator: action.value,
      };
    case 'calculate':
      return {
        ...state,
        clearNext: true,
        firstTerm: null,
        operator: null,
        value: String(calculate(state.firstTerm, state.value, state.operator)),
      };
    default:
      return state;
  }
};
