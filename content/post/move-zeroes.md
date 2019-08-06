---
title: "Move Zeroes"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2018-11-03T16:25:23-07:00
draft: false
archive: false
---
Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

For example, given `nums = [0, 1, 0, 3, 12]`, after calling your function, `nums` should be `[1, 3, 12, 0, 0]`.

### Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
### Credit
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


### Solution
```c++
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int size = nums.size();
        for(int i = size - 1; i >= 0; i--) {
            cout << nums[i];
            if (nums[i] == 0) {
                nums.erase(nums.begin() + i);
                nums.push_back(0);
            }
        }
    }
};
```
```python
class Solution:
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        if not nums or nums == [0] or nums == [0, 0]:
            return
        left = 0 # Use left to store the latest zero occurred
        curr = 0 # pointer
        # Move from left to right
        # left: last appeared non-zero number
        while curr < len(nums):
            if nums[curr] != 0:
                temp = nums[curr]
                nums[curr] = nums[left]
                nums[left] = temp
                left += 1 # move
            curr += 1 # move
        print(nums)
```