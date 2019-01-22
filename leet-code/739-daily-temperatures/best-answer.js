/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let res = Array.from({ length:temperatures.length }, () => 0);
  let stack = [];
  for(let i = 0; i < temperatures.length; i++) {
    while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let j = stack.pop();
      res[j] = i - j;
    }

    stack.push(i);
  }

  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));
