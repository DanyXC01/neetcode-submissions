class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        keyboard_map = {}
        res = 0
        current_idx = 0

        for i, key in enumerate(keyboard):
            keyboard_map[key] = i

        for char in word:
            res += abs(current_idx - keyboard_map[char])
            current_idx = keyboard_map[char]

        return res