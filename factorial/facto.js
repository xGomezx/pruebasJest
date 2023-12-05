function fact(num) {

    let result = 1;

    for (let i = 1; i < num; i++) {
      result *= i;
    }
    result *= num;
    
    return result;
  }

  console.log(fact(5));
module.exports = fact