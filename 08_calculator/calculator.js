const add = function(num1,num2) {
  let total=num1+num2;
	return total;
};

const subtract = function(num1,num2) {
	return Math.subtract(num1,num2);
};

const sum = function(num) {
	return Math.sum(num);
};

const multiply = function(num) {
    return num *= num;
};

const power = function(num) {
    return Math.exp(num);
};

const factorial = function(num) {
  return Math.factorial(num);

//   let result = 1, total=0;
//   for (let i = 2; i <= total; i++) {
//     result *= i;
//   }
//   total = result;
// }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
