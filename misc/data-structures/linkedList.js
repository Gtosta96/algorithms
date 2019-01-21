class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  createNode(value) {
    return { value, next: null }
  }

  /* ---- */

  // O(n)
  // add(value) {
  //   if (!this.head) {
  //     this.head = this.createNode(value);
  //     this.length++;

  //     return this.head;
  //   }

  //   let node = this.head;
  //   while (node.next) {
  //     node = node.next;
  //   }

  //   node.next = this.createNode(value);
  //   this.length++;

  //   return node.next;
  // }

  // O(1)
  add(value) {
    const node = this.createNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;

      return this.head;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this.tail;
  }

  remove(node) {
    if (this.length === 0) return;

    if (this.head === node) {
      this.head = node.next;
      this.length--;

      return;
    }

    let currentNode = this.head;
    while(currentNode.next !== node) {
      currentNode = currentNode.next;
    }

    currentNode.next = node.next;
    this.length--;
  }

  print() {
    console.log(' ');
    console.log('-----');
    console.log(this.head);
    console.log('-----');
    console.log(' ');
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

const firstNode = list.getByIndex(0);
const secondNode = list.getByIndex(1);
const thirdNode = list.getByIndex(2);

list.print();
list.remove(thirdNode);
list.print();

// list.add('potato3');
// list.add('potato4');
// list.add('potato5');
// console.log(list.getLength());
// console.log(list.getByIndex(5))

// list.print();