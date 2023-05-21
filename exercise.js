/** DO NOT CHANGE THE FUNCTION NAME **/
const func = (romanNumber) => {
  // example'XV'
  /* Only make changes below this comment */
  const symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < romanNumber.length; i++) {
    const currentValue = symbolValues[romanNumber[i]];
    const nextValue = symbolValues[romanNumber[i + 1]];

    if (nextValue && currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.func = func;
