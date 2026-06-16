// Linked List solution
class Pair {
  key: number;
  val: number;

  constructor(key = null, val = null) {
    this.key = key;
    this.val = val;
  }
}

class ListNode {
  next: ListNode;
  val: Pair;

  constructor(val: Pair, next = null) {
    this.val = val;
    this.next = next;
  }
}

class HashTable {
  /**
   * @param {number} capacity
   */
  size: number;
  capacity: number;
  map: Array<ListNode>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Array(this.capacity).fill(null);
  }

  hash(key: number) {
    return key % this.capacity;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  insert(key: number, value: number): void {
    const index = this.hash(key);
    const pair = new Pair(key, value);

    if (this.map[index] !== null) {
      let currentNode = this.map[index];

      while (true) {
        if (currentNode.val.key === key) {
          currentNode.val.val = value;
          return;
        } else if (currentNode.next === null && currentNode.val.key !== key) {
          currentNode.next = new ListNode(pair);
          this.size += 1;
          return;
        }
        currentNode = currentNode.next;
      }
    } else if (this.map[index] === null) {
      this.map[index] = new ListNode(pair);
      this.size += 1;
    }

    if (this.size >= this.capacity / 2) {
      this.resize();
    }
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key: number): number {
    const index = this.hash(key);

    let currentNode = this.map[index];

    while (currentNode) {
      if (currentNode.val.key === key) {
        return currentNode.val.val;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  /**
   * @param {number} key
   * @returns {boolean}
   */
  remove(key: number): boolean {
    const index = this.hash(key);
    let currentNode = this.map[index];
    let prev = null;

    while (currentNode) {
      if (currentNode.val.key === key) {
        if (prev) {
          prev.next = currentNode.next;
        } else {
          this.map[index] = currentNode.next;
        }
        this.size--;
        return true;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * @returns {number}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * @returns {number}
   */
  getCapacity(): number {
    return this.capacity;
  }

  /**
   * @return {void}
   */
  resize(): void {
    this.capacity = this.capacity * 2;
    const newMap = new Array(this.capacity).fill(null);

    const oldMap = this.map;
    this.map = newMap;
    this.size = 0;

    for (let node of oldMap) {
      while (node) {
        this.insert(node.val.key, node.val.val);
        node = node.next;
      }
    }
  }
}
