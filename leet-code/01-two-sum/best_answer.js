/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hashMap = {}; // hashTable

  for (let i = 0; i < nums.length; i++) {
      const val = target - nums[i];
      if (hashMap[val] !== undefined) {
          return [hashMap[val], i];
      }
      hashMap[nums[i]] = i;
  }
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1];
console.log(twoSum([3,7,11,13], 16)) // [0, 3];
console.log(twoSum([0,0,10,2], 12)) // [2, 3];

