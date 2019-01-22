/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [];
    for (let i = 0; i < T.length; i++) {
      result[i] = 0;

      for (let j = i + 1; j <= T.length; j++) {
        if (!T[j]) {
          result[i] = 0;
          break;
        }

        if (T[i] < T[j]) {
          result[i]++;
          break;
        } else {
          result[i]++;
        }
      }
    }

    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));
