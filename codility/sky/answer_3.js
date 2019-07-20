// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T, R) {
  // write your code in JavaScript (Node.js 8.9.4)
  
  let tests = 0;
  let passed = 0;
  let groupTests = {};
  for (let i = 0; i < T.length; i++) {
    const test = T[i];

    const testNumber = test.substring(test.length - 2, test.length);

    const isGroupTest = !Number(testNumber[1]);
    if (isGroupTest) {
      const groupTest = groupTests[testNumber[0]] || {};
      groupTests[testNumber[0]] = {
        failed: !groupTest.failed && R[i] === 'OK'
      };
    } else {
      tests =  tests + 1;

      if (R[i] === 'OK') {
        passed++;
      }
    }
  }

  for (let i in groupTests) {
    tests++;

    if (!groupTests[i].failed) {
      passed++;
    }
  }

  console.log(tests);
  console.log(passed);

  const result = Math.floor((passed * 100 / tests));
  return result;
}

console.log(solution(['test1a', 'test2', 'test1b', 'test1c', 'test3'], ['Wrong answer', 'OK', 'Runtime error', 'Time limit exceeded']));
console.log(solution(['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'], ['Wrong answer', 'OK', 'OK', 'Runtime error', 'OK']));