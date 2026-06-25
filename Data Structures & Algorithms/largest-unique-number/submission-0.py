class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        nums_map = {}
        res = -1

        for num in nums:
            if num in nums_map:
                nums_map[num] += 1
            else:
                nums_map[num] = 1
        
        for num in nums_map:
            if nums_map[num] == 1:
                res = max(res, num)

        return res