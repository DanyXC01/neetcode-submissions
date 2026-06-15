class ListNode {
  public val: number;
  public next: ListNode | null;
  public prev: ListNode | null;

  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}


class MyStack {
    private head: ListNode;
    private tail: ListNode;
    private size: number;

    constructor() {
      this.head = new ListNode(-1);
      this.tail = new ListNode(-1);
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.size = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
      const newNode = new ListNode(x);

      const lastNode = this.tail.prev!;
      lastNode.next = newNode;
      newNode.prev = lastNode;
      newNode.next = this.tail;
      this.tail.prev = newNode;

      this.size++;
    }

    /**
     * @return {number}
     */
    pop(): number {
      const targetNode = this.tail.prev!;
      const value = targetNode.val;

      targetNode.prev!.next = this.tail; // just for boundary
      this.tail.prev = targetNode.prev;

      this.size--;

      return value;
    }

    /**
     * @return {number}
     */
    top(): number {
      const value = this.tail.prev.val;

      return value;
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
      return this.size === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
