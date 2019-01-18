// FILO - First in - Last out

class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.data[this.top] = value;
  }

  pop() {
    const item = this.data[this.top];
    this.data.splice(this.top, 1);
    this.top--;

    return item;
  }

  print() {
    console.log(' ');
    console.log('-----');
    console.log(this.data);
    console.log('-----');
    console.log(' ');
  }
}

const stack = new Stack();
stack.push(1)
stack.push(2)

stack.pop();

stack.print();