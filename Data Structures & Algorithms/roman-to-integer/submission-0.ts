class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    subtractSpecific(first: string, second: string): number {
        if (first === "I" && second === "V") {
            return 4;
        } else if (first === "I" && second === "X") {
            return 9;
        } else if (first === "X" && second === "L") {
            return 40;
        } else if (first === "X" && second === "C") {
            return 90;
        } else if (first === "C" && second === "D") {
            return 400;
        } else if (first === "C" && second === "M") {
            return 900;
        }
        return -1;
    }

    romanToInt(s: string): number {
        const map: Map<string, number> = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000],
        ]);

        let result = 0;

        for (let i = 0; i < s.length; i++) {
            if (i + 1 < s.length && map.get(s[i + 1]) > map.get(s[i])) {
                result -= map.get(s[i]);
            } else {
                result += map.get(s[i]);
            }
        }

        return result;
    }
}