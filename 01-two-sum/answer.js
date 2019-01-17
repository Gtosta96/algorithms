/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++) {
    for(var j = i + 1; j < nums.length; j++) {

      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }

      // const diff = target - nums[i];
      // if (nums[j] === diff) {
      //   return [i, j];
      // }

    }
  }
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1];
console.log(twoSum([3,7,11,13], 16)) // [0, 3];
console.log(twoSum([0,0,10,2], 12)) // [2, 3];

