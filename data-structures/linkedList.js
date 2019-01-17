class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;

    this.add = this.add.bind(this);
    this.print = this.print.bind(this);
    this.getLength = this.getLength.bind(this);
  }

  createNode(value) {
    return { value, next: null }
  }

  /* ---- */

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
    return console.log(this.length);
  }
}

const list = new LinkedList();
list.add('potato');
list.add('potato2');
list.add('potato3');
list.add('potato4');
list.add('potato5');
list.getLength();
list.print();