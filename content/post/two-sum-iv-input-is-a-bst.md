---
title: "Two Sum Iv Input Is a Bst"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bst", "two-pointers", "inorder-traversal"]
categories: ["algorithm"]
date: 2019-08-19T23:01:32-07:00
draft: false
archive: false
---
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

### Example 1
```
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
```
### Example 2
```
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
```
### Solution
```python
# time: `O(n)`
# space: `O(n)`
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTarget(self, root: TreeNode, k: int) -> bool:
        if not root:
            return False

        visited = set()
        return self.traverse(root, visited, k)

    def traverse(self, root, visited, k):
        if root == None:
            return False

        if k - root.val in visited:
            return True
        visited.add(root.val)

        return self.traverse(root.left, visited, k) or self.traverse(root.right, visited, k)
```
```python
# time: `O(n)`
# space: `O(n)`
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def findTarget(self, root: TreeNode, k: int) -> bool:
        if not root:
            return False

        target = k
        nums = []
        self.flatten(root, nums)
        left, right = 0, len(nums)-1
        print(nums)
        while left < right:
            temp = nums[left] + nums[right]
            if temp == target:
                return True
            elif temp < target:
                left += 1
            else:
                right -= 1
        return False

    def flatten(self, root, nums):
        if root == None:
            return

        self.flatten(root.left, nums)
        nums.append(root.val)
        self.flatten(root.right, nums)

```