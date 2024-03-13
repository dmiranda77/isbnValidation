"use strict";
function validateNumbers(digit) {
    if (digit.length !== 10) { // check if digit is 10 in length
        return false;
    }
    const lastChar = digit[9]; //check if last dig is number or X
    if (!/^\d$/.test(lastChar) && lastChar !== 'X') {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        if (!/^\d$/.test(digit[i])) {
            return false;
        }
        sum += parseInt(digit[i]) * (i + 1);
    }
    if (digit[9] === 'X') {
        sum += 10 * 10;
    }
    else {
        sum += parseInt(digit[9]) * 10;
    }
    return sum % 11 === 0;
}
// Test cases
console.log(validateNumbers("1112223339")); // true
console.log(validateNumbers("111222333")); // false
console.log(validateNumbers("1112223339X")); // false
console.log(validateNumbers("1234554321")); // true
console.log(validateNumbers("1234512345")); // false
console.log(validateNumbers("048665088X")); // true
console.log(validateNumbers("X123456788")); // false
