class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = []

        const sum = (numbers: number[]): number => {
            let result = 0

            for (let number of numbers) {
                result += number
            }

            return result
        }

        const checkOp = (op: string): void => {
            switch (op) {
                case "D":
                    const last = stack[stack.length - 1]
                    const modifiedLast = last * 2
                    stack.push(modifiedLast)
                    break;
                case "+":
                    const lastTwoScores = [stack[stack.length - 2], stack[stack.length - 1]]
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
