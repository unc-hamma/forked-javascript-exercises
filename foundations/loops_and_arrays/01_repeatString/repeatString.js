const repeatString = function(str, num) {

    if( num < 0) return "Error";

    let str2 = "";
    for(let i = 1; i <= num; i++) {
       str2 += str;
    }
    return str2;
    

};



// Do not edit below this line
module.exports = repeatString;
