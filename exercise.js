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

  let result = 0;
  let count = 0;

  while (count < romanNumber.length) {
    const actualSimbol = romanNumber[count];
    const actualVal = romanValues[actualSimbol];

    const nextSimbol = romanNumber[count + 1];
    const nextVal = romanValues[nextSimbol];

    if (nextVal && actualVal < nextVal) {
      result += nextVal - actualVal;
      count += 2;
    } else {
      result += actualVal;
      count += 1;
    }
  }

  return result;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.func = func;
