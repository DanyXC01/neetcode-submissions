# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        pointers_map = {}

        current_node = head

        while current_node:
            if current_node in pointers_map:
                return True
            else:
                pointers_map[current_node] = 1
            current_node = current_node.next
            
        
        return False
        