/** DO NOT CHANGE THE FUNCTION NAME **/
const func = (romanNumber) => {
  // example'XV'
  /* Only make changes below this comment */
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0,
    i = 0,
    actualValue = 0,
    nextValue = 0;

  for (i = 0; i < romanNumber.length; i++) {
    actualValue = romanValues[romanNumber[i]];
    nextValue = romanValues[romanNumber[i + 1]];

    if (nextValue && actualValue < nextValue) {
      result -= actualValue;
    } else {
      result += actualValue;
    }
  }
  return result;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.func = func;
