class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
      const stack: number[] = []
      const operations: string[] = ["*", "/", "+", "-"];

      const performActionWithToken = (token: string): number => {
        let result = null;
        let [current, prev] = [stack.pop(), stack.pop()];

        switch(token) {
          case "*":
            result = prev * current;
            break;
          case "/":
            result = Math.trunc(prev / current);
            break;
          case "-":
            result = prev - current;
            break;
          case "+":
            result = prev + current
            break;
        }

        return result;
      }

      for (let token of tokens) {
          if (operations.includes(token)) {
            const result = performActionWithToken(token)
            stack.push(result)
            continue
          }
          stack.push(Number(token))
      }

      return stack.pop()
    }
}
