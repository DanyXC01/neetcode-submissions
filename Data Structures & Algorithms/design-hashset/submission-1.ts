class MyHashSet {
    set: any[];

    constructor() {
      this.set = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
      this.set[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
      this.set[key] = false;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
      if (this.set[key]) return true
      return false
    }
}