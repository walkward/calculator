export default (...numbers) => {
  let val = String(numbers.join(''));

  // Remove leading zeros
  if (/(^0\d+)/.test(val)) val = val.replace(/^0/, '');

  // Remove multiple decimals
  if (/\..*\./.test(val)) val = val.replace(/\.(?!.*\.)/, '');

  return val;
};
