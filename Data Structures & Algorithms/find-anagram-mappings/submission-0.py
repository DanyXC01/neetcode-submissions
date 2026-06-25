class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res_dict = {}
        res = []

        for i in range(len(nums2)):
            res_dict[nums2[i]] = i
        
        for num in nums1: 
            res.append(res_dict[num])

        return res