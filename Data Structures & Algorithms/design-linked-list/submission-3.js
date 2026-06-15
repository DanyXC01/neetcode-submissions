class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
    constructor() {
      this.head = new ListNode(-1);
      this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number} 
     */
    get(index) {
      if (index < 0 || index >= this.size) return -1;

      let currentNode = this.head.next;
      let i = 0;

      while (currentNode) {
        if (index === i) return currentNode.val;
        i++;
        currentNode = currentNode.next;
      }
      return -1;
    }

    /**
     * @param {number} val
     * @return {void} 
     */
    addAtHead(val) {
      const newNode = new ListNode(val);
      newNode.next = this.head.next;
      this.head.next = newNode;
      this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
      const newNode = new ListNode(val);
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;

      this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
      if (index < 0 || index > this.size) return;

      const newNode = new ListNode(val);
      let currentNode = this.head;
      let i = 0;

      while (currentNode) {
        if (index === i) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          this.size++;
          return;
        }
        i++;
        currentNode = currentNode.next;
      }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
      if (index < 0 || index >= this.size) return;

      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }

      currentNode.next = currentNode.next.next;
      this.size--;
    }
}
