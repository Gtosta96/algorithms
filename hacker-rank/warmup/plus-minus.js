function plusMinus(arr) {
  let positivesCount = 0;
  let negativesCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < arr.length; i++) {
   if (arr[i] > 0) {
     positivesCount += 1;
   } else if (arr[i] < 0) {
     negativesCount += 1;
   } else {
     zerosCount += 1;
   }
  }

  return [
    (positivesCount / arr.length).toFixed(6),
    (negativesCount / arr.length).toFixed(6),
    (zerosCount / arr.length).toFixed(6),
  ];
}

const a = [-4, 3, -9, 0, 4, 1];

plusMinus(a);
console.log(plusMinus(a));