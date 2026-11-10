const reverseString = function(str) {
    let str2 = [];

    for(let i = 0; i < str.length; i++){
        str2.unshift(str[i]);
    }
    return str2.join('');
};

// Do not edit below this line
module.exports = reverseString;
