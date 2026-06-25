class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack: List[int] = []
        index_map = {}
        res = []
        
        for num in nums2:
            while len(stack) > 0 and num > stack[-1]:
                index_map[stack.pop()] = num

            stack.append(num)
        
        for num in nums1:
            if num in index_map:
                res.append(index_map[num])
            else:
                res.append(-1)

        return res