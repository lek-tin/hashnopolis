---
title: "Maximum Xor of Two Numbers in an Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bit-manipulation", "trie", "hashset"]
categories: ["algorithm"]
date: 2020-03-30T22:59:16-07:00
lastmod: 2020-03-30T22:59:16-07:00
draft: false
archive: false
---

Given a **non-empty** array of numbers, a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>, … , a<sub>n-1</sub>, where 0 ≤ a<sub>i</sub> < 2<sup>31</sup>.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in `O(n)` runtime?

### Example

```
Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
```

### Solution (prefix hashset - less efficient)

Time: `O(N)`  
Space: `O(1)`  
```python
class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        #   0bxxxxxx -           0b
        L = len(bin(max(nums))) - 2
        max_xor = 0

        for i in range(L-1, -1, -1):
            max_xor <<= 1
            print("max_xor:", bin(max_xor) )
            # set the rightmost bit to 1
            curr_xor = max_xor | 1
            print("curr_xor:", bin(curr_xor) )
            # highest (L-i) bits
            prefixes = {num >> i for num in nums}
            print("prefixes:", [bin(p) for p in prefixes] )
            # as long as there exists a p that makes curr_xor^p > 0
            # Update max_xor, if two of these prefixes could result in curr_xor.
            # Check if p1^p2 == curr_xor, i.e. p1 == curr_xor^p2
            # because if a^b = c => b^c = a / a^c = b
            max_xor |= any(curr_xor^p in prefixes for p in prefixes)
            print("max_xor:", bin(max_xor) )
            print("--------")

        return max_xor

# input: [3,10,5,25,2,8]
# max_xor: 0b0
# curr_xor: 0b1
# prefixes: ['0b0', '0b1']
# max_xor: 0b1
# --------
# max_xor: 0b10
# curr_xor: 0b11
# prefixes: ['0b0', '0b1', '0b11']
# max_xor: 0b11
# --------
# max_xor: 0b110
# curr_xor: 0b111
# prefixes: ['0b0', '0b1', '0b10', '0b110']
# max_xor: 0b111
# --------
# max_xor: 0b1110
# curr_xor: 0b1111
# prefixes: ['0b1', '0b10', '0b100', '0b101', '0b1100']
# max_xor: 0b1110
# --------
# max_xor: 0b11100
# curr_xor: 0b11101
# prefixes: ['0b10', '0b11', '0b101', '0b1000', '0b1010', '0b11001']
# max_xor: 0b11100
# --------
```

### Solution (prefix trie - more efficient)

Time: `O(N)`  
Space: `O(1)`  
```python

```
