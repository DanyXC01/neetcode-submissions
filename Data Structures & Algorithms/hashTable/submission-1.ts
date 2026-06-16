class Pair {
  public key: number;
  public value: number;

  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  /**
   * @param {number} capacity
   */
  private capacity: number;
  private size: number;
  private hashTable: Array<Pair | null>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.hashTable = new Array(this.capacity).fill(null);
    this.size = 0;
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
    let index = this.hash(key);

    while (true) {
      if (this.hashTable[index] === null) {
        this.hashTable[index] = new Pair(key, value);
        this.size += 1;
        if (this.size >= this.capacity / 2) {
          this.resize();
        }
        return;
      } else if (this.hashTable[index].key === key) {
        this.hashTable[index].value = value;
        return;
      }
      index += 1;
      index = index % this.capacity;
    }
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key: number): number {
    let index = this.hash(key);
    let start = index;

    while (this.hashTable[index] !== null) {
      if (this.hashTable[index].key === key) {
        return this.hashTable[index].value;
      }
      index = (index + 1) % this.capacity;
      if (index === start) break;
    }

    return -1;
  }

  /**
   * @param {number} key
   * @returns {boolean}
   */
  remove(key: number): boolean {
    let index = this.hash(key);
    let start = index;

    while (this.hashTable[index] !== null) {
      if (this.hashTable[index].key === key) {
        this.hashTable[index] = null;
        this.size -= 1;

        // Rehash following elements in the cluster to fill the gap
        index = (index + 1) % this.capacity;
        while (this.hashTable[index] !== null) {
          let temp = this.hashTable[index];
          this.hashTable[index] = null;
          this.size -= 1;
          this.insert(temp.key, temp.value);
          index = (index + 1) % this.capacity;
        }
        return true;
      }
      index = (index + 1) % this.capacity;
      if (index === start) break;
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
    const oldHashTable = this.hashTable;
    this.capacity = this.capacity * 2;
    this.hashTable = new Array(this.capacity).fill(null);
    this.size = 0;

    for (let i = 0; i < oldHashTable.length; i++) {
        if (oldHashTable[i] !== null) {
            this.insert(oldHashTable[i].key, oldHashTable[i].value);
        }
    }
  }
}