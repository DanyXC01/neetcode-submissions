class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const CLOSED_BRACKETS = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        const stack = []
        let i = 0
        let n = s.length


        while (i < n) {
            if (CLOSED_BRACKETS[s[i]]) {
                if (stack[stack.length - 1] === CLOSED_BRACKETS[s[i]]) {
                    stack.pop()
                    i++
                    continue
                } else {
                    return false
                }
            }

            stack.push(s[i])
            i++
        }


        return stack.length === 0

    }
}
