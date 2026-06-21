from typing import Dict # this adds type hinting for Dict

def count_characters(word: str) -> Dict[str, int]:
    output = {}

    for char in word:
        if char in output:
            output[char] += 1
        else:
            output[char] = 1
            
    return output




# don't modify below this line
print(count_characters("hello"))
print(count_characters("world"))
print(count_characters("hello world"))
print(count_characters("this is a longer sentence"))
