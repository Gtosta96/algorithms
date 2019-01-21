// https://www.youtube.com/watch?v=bgaUjbQ8NsQ&list=PLBNBxpMAbyhUxkbpblbNjXsPC2PTyp4G0&index=7

function solution(arr) {

  let p1 = null;
  let p2 = null;
  for(let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) { // is even

      if (p1 === null) {
        p1 = arr[i];
      } else if (p1 === arr[i]) {
        p1 = null;
      } else {
        break;
      }

    } else {

      if (p2 === null) {
        p2 = arr[i];
      } else if (p2 === arr[i]) {
        p2 = null;
      } else {
        break;
      }

    }
  }

  return p1 || p2;
}

function solution(arr) {
  const map = {};
  for(let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      delete map[arr[i]];
    } else {
      map[arr[i]] = arr[i];
    }
  }

  return map;
}


console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([9, 3, 9, 2, 9, 3, 9]));

