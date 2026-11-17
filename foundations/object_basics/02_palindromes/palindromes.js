const palindromes = function (text) {
    let splitText = text.split("");
    let isIt = true;
    let j = splitText.length -1;

    for(let i = 0; i <= Math.floor(splitText.length /2); i++){
    
    if(splitText[i] === " " || /^\p{P}$/u.test(splitText[i])){
      continue;
    }
    if(splitText[j] === " " || /^\p{P}$/u.test(splitText[j])){
      j--;
      i--;
      continue;
    }
    if(splitText[i].toLowerCase() !== splitText[j].toLowerCase()){
      isIt = false;
      break;
    }
    j--;
  }
  return isIt
};

// Do not edit below this line
module.exports = palindromes;
