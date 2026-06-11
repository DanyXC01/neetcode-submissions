class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
      const map = new Map();

      if (s.length !== t.length) return false

      for (const char of s) {
        if (!map.has(char)) {
          map.set(char, 1)
        } else {
          map.set(char, map.get(char) + 1)
        }
      }

      for (const char of t) {
        if (!map.has(char) || map.get(char) === 0) return false
        map.set(char, map.get(char) - 1)
      }

      return true
      
    }
}
