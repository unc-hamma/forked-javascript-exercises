const fibonacci = function(nb) {
    if( nb < 0 || Number.isNaN(nb) || typeof nb !== 'number') return "OOPS"
    let fib = [0, 1];

  for(let i = 1; i <= nb; i++){
    let j = i - 1;
    fib.push(fib[i] + fib[j]);
  }
  return fib[nb];

};

// Do not edit below this line
module.exports = fibonacci;
