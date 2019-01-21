function aVeryBigSum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}


const a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
aVeryBigSum(a);