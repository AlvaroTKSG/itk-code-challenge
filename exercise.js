/** DO NOT CHANGE THE FUNCTION NAME **/
const func = (romanNumber) => { // example'XV'
    /* Only make changes below this comment */
      const symbolValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result=0;
    let prevValue=0;

    for(let i= romanNumber.length - 1; i >= 0; i--){
        const currentValue=symbolValue[romanNumber[i]];
        if(currentValue >= prevValue){
            result += currentValue
        } else {
            result -= currentValue;
        }

        prevValue = currentValue;
    }

    return result;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.func = func;
