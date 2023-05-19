/** DO NOT CHANGE THE FUNCTION NAME **/
const func = (romanNumber) => {
  // example'XV'
  /* Only make changes below this comment */

  //I ALREDY SOLVED IN LEET CODE SO HERE IS MY ANSWER
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sSplited = romanNumber.split("");

  let newS = [];
  let newNumber = 0;

  for (let i = 0; i < sSplited.length; i++) {
    let value = sSplited[i];
    let value2 = sSplited[i + 1];

    if (roman[value] < roman[value2]) {
      newNumber = roman[value2] - roman[value];
      sSplited[i] = newNumber;
      newS.push(newNumber);
      i++;
    } else {
      newNumber = roman[value];
      newS.push(newNumber);
    }
  }

  for (let k = 0; k < newS.length - 1; k++) {
    newNumber += newS[k];
  }

  console.log(newNumber);
  return newNumber;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.func = func;
