class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;

    this.add = this.add.bind(this);
    this.print = this.print.bind(this);
    this.getLength = this.getLength.bind(this);
    this.getByIndex = this.getByIndex.bind(this);
  }

  createNode(value) {
    return { value, next: null }
  }

  /* ---- */

  // O(n)
  add(value) {
    if (!this.head) {
      this.head = this.createNode(value);
      this.length++;

      return this.head;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    node.next = this.createNode(value);
    this.length++;

    return node.next;
  }

  print() {
    console.log(this.head);
  }

  getLength() {
    return this.length;
  }

  // O(n)
  getByIndex(index) {
    if (index === 0 || index > this.length) return null;

    let counter = 0;
    let node = this.head;
    while(index > counter && node.next) {
      node = node.next
      counter++;
    }
    
    return node;
  }
}

const list = new LinkedList();
list.add('potato');
list.add('potato2');
list.add('potato3');
list.add('potato4');
list.add('potato5');
// console.log(list.getLength());
// list.print();

console.log(list.getByIndex(5))

console.log(list.test())