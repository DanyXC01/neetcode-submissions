class ListNode {
    constructor(val = 0, key = 0, next = null) {
        this.val = val;
        this.key = key;
        this.next = next;
    }
}

const DEFAULT_CAPACITY = 10007;

class MyHashMap {
    constructor() {
        this.capacity = DEFAULT_CAPACITY;
        this.map = new Array(this.capacity).fill(null);
    }

    hash(key) {
        return key % this.capacity;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this.hash(key);
        const newNode = new ListNode(value, key);

        if (this.map[index] !== null) {
            let currentNode = this.map[index];

            while (currentNode) {
                if (currentNode.key === key) {
                    currentNode.val = value;
                    return;
                } else if (currentNode.next === null && currentNode.key !== key) {
                    currentNode.next = newNode;
                    return;
                }
                currentNode = currentNode.next;
            }

        } else if (this.map[index] === null) {
            this.map[index] = newNode;
        } 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this.hash(key);

        let currentNode = this.map[index]

        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.val;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key);

        let currentNode = this.map[index];
        let prev = null;

        while (currentNode) {
            if (currentNode.key === key) {
                if (prev) {
                    prev.next = currentNode.next;
                } else {
                    this.map[index] = currentNode.next;
                }
                return;
            }
            prev = currentNode;
            currentNode = currentNode.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */