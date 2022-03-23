class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  insertNodeAtTheEnd(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    this.printList();
  }

  insertNodeAtTheBegining(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    this.printList();
  }

  printList(){
    const list = [];
    let currentNode = this.head;
    while(currentNode!==null){
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log({list});
    console.log("Length = ",this.length);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.insertNodeAtTheEnd(15);
myLinkedList.insertNodeAtTheBegining(5);
