class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const CLOSED_BRACKETS = [']', '}', ')']
        const stack = []
        let i = 0
        let n = s.length

        const isBracketsClosedCorrect = (currentBracket: string): boolean => {
            const lastBracketOnStack = stack[stack.length - 1]

            if (currentBracket === ')' && lastBracketOnStack === '(') {
                return true
            } else if (currentBracket === ']' && lastBracketOnStack === '[') {
                return true
            } else if (currentBracket === '}' && lastBracketOnStack === '{') {
                return true
            }

            return false
        }


        while (i < n) {
            if (CLOSED_BRACKETS.includes(s[i])) {
                const result = isBracketsClosedCorrect(s[i])
                if (result) {
                    stack.pop()
                    i++
                    continue
                }
                if (!result) return false
            }

            stack.push(s[i])
            i++
        }


        return stack.length === 0

    }
}
