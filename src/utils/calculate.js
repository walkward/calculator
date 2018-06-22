function round(value, precision) {
  const multiplier = 10 ** precision || 0;
  return Math.round(value * multiplier) / multiplier;
}

export default (firstTerm, secondTerm, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = Number(firstTerm) + Number(secondTerm);
      break;
    case '-':
      result = Number(firstTerm) - Number(secondTerm);
      break;
    case '÷':
      result = Number(firstTerm) / Number(secondTerm);
      break;
    case '×':
      result = Number(firstTerm) * Number(secondTerm);
      break;
    case null:
      result = Number(secondTerm);
      break;
    default:
      throw new Error(`Unrecognized operator ${operator}`);
  }

  return round(result, 5);
};
