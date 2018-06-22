export default (...numbers) => {
  let val = String(numbers.join(''));

  // Remove leading zeros
  if (/(^0\d+)/.test(val)) val = val.replace(/^0/, '');

  // Remove multiple decimals
  if (/\..*\./.test(val)) val = val.replace(/\.(?!.*\.)/, '');

  // Prevent leading decimals '0.3' vs '.3'
  if (/^\./.test(val)) val = `0${val}`;

  return val;
};
