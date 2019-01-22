function diagonalDifference(arr) {
  let sumLeftToRight = 0;
  let sumRightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
   sumLeftToRight += arr[i][i];
   sumRightToLeft += arr[i][(arr.length - 1) - i];
  }

  return Math.abs(sumLeftToRight - sumRightToLeft);
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

diagonalDifference(a);
console.log(diagonalDifference(a));