---
title: "Prison Cells After N Days"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bit-manipulation", "loop-detection"]
categories: ["algorithm"]
date: 2019-03-08T01:33:22-08:00
updated_at: 2019-09-16T01:33:22-08:00
draft: false
archive: false
---
There are `8` prison cells in a row, and each cell is either occupied or vacant.  

Each day, whether the cell is occupied or vacant changes according to the following rules:  

1. If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
2. Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)  

We describe the current state of the prison in the following way: `cells[i] == 1` if the `i-th` cell is occupied, else `cells[i] == 0`.  

Given the initial state of the prison, return the state of the prison after `N` days (and `N` such changes described above.)  

### Example 1:
```
Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: 
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
```
### Example 2:
```
Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
Output: [0,0,1,1,1,1,1,0]
```

### Note:
1. `cells.length == 8`
2. `cells[i] is in {0, 1}`
3. `1 <= N <= 10^9`

### Solution:
```
For a single flip:
 binary         = 0b   0 1 0 1 1 0 0 1
 binary<<1      = 0b 0 1 0 1 1 0 0 1 0
 binary>>1      = 0b     0 1 0 1 1 0 0
== XOR ===============================
 result         = 0b 1 1 0 0 1 1 1 1 0  Notice every bit is at the opposite value,
   255          =      1 1 1 1 1 1 1 1  we need to flip them by every digits
== XOR ===============================
 result         = 0b 1 0 1 1 0 0 0 0 1  extract the 6 digits in the middle,
   126          = 0b     1 1 1 1 1 1 0
== AND ===============================
 result         = 0b   0 1 1 0 0 0 0 0
```
Hint: <https://leetcode.com/problems/prison-cells-after-n-days/discuss/236914/Python-Bit-Manipulation-with-detailed-explanation>

### Solution
```python
class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        day = N % 14
        day = day if day != 0 else 14
        for i in range(day):
            temp = [0 for _ in range(len(cells))]
            for j in range(1, len(cells)-1):
                if cells[j-1] == cells[j+1] == 1 or cells[j-1] == cells[j+1] == 0:
                    temp[j] = 1
                else:
                    temp[j] = 0
            cells = temp[:]
            # print("day ", i+1, ": ", cells)

        return cells
```