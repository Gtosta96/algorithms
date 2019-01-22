function staircase(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += '\n' + ' '.repeat(n - i);
    str += '#'.repeat(i);
  }

  return str;
}

const a = 6;

staircase(a);
console.log(staircase(a));