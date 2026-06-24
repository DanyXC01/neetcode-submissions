# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        stack: List[int] = []
        current = head

        while current:
            stack.append(current.val)
            current = current.next

        i, j = 0, len(stack) - 1

        while i < j:
            if stack[i] != stack[j]:
                return False
            i += 1
            j -= 1
        
        return True
        
        

        