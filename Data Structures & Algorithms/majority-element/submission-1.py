class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums_map = {}
        k = len(nums) / 2

        if len(nums) == 1:
            return nums[0]

        for num in nums:
            if num in nums_map:
                nums_map[num] += 1
                if nums_map[num] > k:
                    return num
            else:
                nums_map[num] = 1
        
        return -1