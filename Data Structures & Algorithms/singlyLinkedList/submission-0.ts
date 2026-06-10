class ListNode {
    public value: number
    public next: ListNode

    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    private head: ListNode
    private tail: ListNode


    constructor() {
        this.head = new ListNode(-1)
        this.tail = this.head
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let currentNode = this.head.next
        let i = 0;

        while (currentNode) {
            if (i === index) {
                return currentNode.value
            }
            i++
            currentNode = currentNode.next
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new ListNode(val)
        newNode.next = this.head.next
        this.head.next = newNode

        if (!newNode.next) {
            this.tail = newNode
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new ListNode(val)
        this.tail.next = newNode
        this.tail = newNode
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let i = 0;
        let currentNode = this.head

        // find node right before target
        while (i < index && currentNode) {
            i++;
            currentNode = currentNode.next
        }

        if (currentNode && currentNode.next) {
            // check if node is tail
            if (currentNode.next === this.tail) {
                this.tail = currentNode
            }
            currentNode.next = currentNode.next.next
            return true
        }

        return false
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values = []
        let currentNode = this.head.next

        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }

        return values
    }
}
