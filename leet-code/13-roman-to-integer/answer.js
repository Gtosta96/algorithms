/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const prev = s[i - 1];

    if (
      (prev === 'I' && (current === 'V' || current === 'X')) ||
      (prev === 'X' && (current === 'L' || current === 'C')) ||
      (prev === 'C' && (current === 'D' || current === 'M'))
      ) {
      result += map[current] - (map[prev] * 2);
    } else {
      result += map[current];
    }
  }

  return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));

console.log(romanToInt('XIII'));
console.log(romanToInt('XIX'));