class DynamicArray {
    private capacity: number
    private length: number
    private array: number[]
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.length = 0
        this.array = new Array(this.capacity).fill(0)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.capacity === this.length) {
            this.resize()
        }
        this.array[this.length] = n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if (this.length > 0) {
            this.length--
        }

        return this.array[this.length]
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2
        const newArr = new Array(this.capacity).fill(0)

        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.array[i]
        }
        this.array = newArr
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
