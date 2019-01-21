// FIFO - First in - First out

class Queue {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.push(value);
  }

  remove() {
   this.data.shift();
  }

  print() {
    console.log(' ');
    console.log('-----');
    console.log(this.data);
    console.log('-----');
    console.log(' ');
  }
}

const queue = new Queue();

queue.add(1)
queue.add(2)
queue.add(3)

queue.remove();
queue.add(4)
queue.remove();

queue.print();