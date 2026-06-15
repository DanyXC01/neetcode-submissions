class QueueNode {
  public next: QueueNode | null;
  public val: number;
  public prev: QueueNode | null;

  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class MyDeque {
  private head: QueueNode;
  private tail: QueueNode;
  private size: number;

  constructor() {
    this.head = new QueueNode(0);
    this.tail = new QueueNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  /**
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * @param {number} value
   */
  append(value: number): void {
    const newQueueNode = new QueueNode(value);

    const lastNode = this.tail.prev!;
    newQueueNode.prev = lastNode;
    lastNode.next = newQueueNode;
    newQueueNode.next = this.tail;
    this.tail.prev = newQueueNode;

    this.size++;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  appendleft(value: number): void {
    const newQueueNode = new QueueNode(value);

    const firstNode = this.head.next!;
    newQueueNode.next = firstNode;
    firstNode.prev = newQueueNode;
    this.head.next = newQueueNode;
    newQueueNode.prev = this.head;

    this.size++;
  }

  /**
   * @return {number}
   */
  pop(): number {
    if (this.isEmpty()) return -1;

    const targetNode = this.tail.prev!;
    const value = targetNode.val;

    targetNode.prev!.next = this.tail;
    this.tail.prev = targetNode.prev;

    this.size--;

    return value;
  }

  /**
   * @return {number}
   */
  popleft(): number {
    if (this.isEmpty()) return -1;

    const targetNode = this.head.next!;
    const value = targetNode.val;

    targetNode.next!.prev = this.head;
    this.head.next = targetNode.next;

    this.size--;

    return value;
  }
}
