class     Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack: List[int] = []
        asteroids_len = len(asteroids)

        for i in range(0, len(asteroids)):
            while stack and self.is_asteroid_collision(stack[-1], asteroids[i]):
                if abs(stack[-1]) == abs(asteroids[i]):
                    stack.pop()
                    break
                elif abs(asteroids[i]) < abs(stack[-1]):
                    break
                elif abs(asteroids[i]) > abs(stack[-1]):
                    stack.pop()
                    continue
            else:
                stack.append(asteroids[i])


        return stack

    def is_asteroid_collision(self, prev: int, current: int) -> bool:
        if prev == None:
            return False
        if (prev > 0 and current < 0):
            return True
        
        return False