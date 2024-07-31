const inputModule = require("./input");
const outputModule = require("./output");

inputModule.readInput((numberOfTestCases, inputs) => {
  for (let i = 0; i < numberOfTestCases; i++) {
    input = inputs[i];
    linkedList(input);
  }
});
/*====================================================*/

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList(){
    let currentNode = this.head;
    const list = [];
    while(currentNode){
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list.join("->"));
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.tail = this.head;
    this.head = newNode;
    this.length++;
    this.printList();
  }

}

const linkedList = () => {
  const sll = new SinglyLinkedList(5);
  sll.prepend(1);
  sll.prepend(0);
}