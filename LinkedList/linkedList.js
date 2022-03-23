class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  insertNodeAtTheEnd(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this;
  }

  insertNodeAtTheBegining(value){
    const newNode = {
      value: value,
      next: this.head
    }
    this.head = newNode;
    this.length++
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.insertNodeAtTheEnd(15);
myLinkedList.insertNodeAtTheBegining(5);
console.log({myLinkedList});
console.log(myLinkedList.head);
