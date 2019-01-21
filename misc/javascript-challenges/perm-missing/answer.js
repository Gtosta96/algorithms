// https://www.youtube.com/watch?v=fslpyQRYLOA&list=PLBNBxpMAbyhUxkbpblbNjXsPC2PTyp4G0&index=5

function solution(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for(let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += i + 1;
  }
  sum2 += arr.length + 1;

  return sum2 - sum1;
}


console.log(solution([2, 3, 1, 5])) // 4
console.log(solution([1, 5, 2, 4])) // 3