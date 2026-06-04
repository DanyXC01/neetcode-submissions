class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = []

        const sum = (numbers: number[]): number => {
            return numbers.reduce((acc, el) => acc + el, 0)
        }

        const checkOp = (op: string): void => {
            switch (op) {
                case "D":
                    const last = stack[stack.length - 1]
                    const modifiedLast = last * 2
                    stack.push(modifiedLast)
                    break;
                case "+":
                    const lastTwoScores = stack.slice(-2, stack.length)
                    const stackSum = sum(lastTwoScores)
                    stack.push(stackSum)
                    break;
                case "C":
                    stack.pop()
                    break;
                default:
                    stack.push(Number(op))
            }
        }

        for (let op of operations) {
            checkOp(op)
        }


        return sum(stack)
    }
}
