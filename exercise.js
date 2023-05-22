/** DO NOT CHANGE THE FUNCTION NAME **/
const func = (romanNumber) => {
  // example'XV'
  /* Only make changes below this comment */
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    const currentSymbol = romanNumber[i];
    const currentValue = romanNumerals[currentSymbol];
    const nextSymbol = romanNumber[i + 1];
    const nextValue = romanNumerals[nextSymbol];

    if (nextValue && nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.func = func;

console.log(func("IV"));
