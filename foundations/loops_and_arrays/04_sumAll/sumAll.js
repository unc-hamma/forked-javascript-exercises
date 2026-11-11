const sumAll = function(a, b) {

    if( !a.isInteger() || !b.isInteger()) return "Error";

    let sum = a;
    for(let i = a + 1; i <= b; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
