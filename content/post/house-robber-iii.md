---
title: "House Robber III"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "memoization", "dfs", "divide-and-conquer"]
categories: ["algorithm"]
date: 2019-02-21T20:56:55-08:00
lastmod: 2019-03-20T20:56:55-08:00
draft: false
archive: false
---
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if **two directly-linked** houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

### Example 1
```
Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
```
### Example 2
```
Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
```
### Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    memo = {}

    def rob(self, root: TreeNode) -> int:
        if not root:
            return 0

        return self.dfs(root)

    def dfs(self, root):
        if not root:
            return 0

        if root in self.memo:
            return self.memo[root]

        res = 0
        leftMax = self.dfs(root.left)
        rightMax = self.dfs(root.right)

        maxWithoutRoot = leftMax + rightMax
        maxWithRoot = 0

        if root.left:
            maxWithRoot += self.dfs(root.left.left) + self.dfs(root.left.right)
        if root.right:
            maxWithRoot += self.dfs(root.right.left) + self.dfs(root.right.right)

        res = max(maxWithRoot + root.val, maxWithoutRoot)

        self.memo[root] = res

        return res
```

### Solution

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
     public int rob(TreeNode root) {
          if (root == null) {
               return 0;
          }

          HashMap<TreeNode, Integer> memo = new HashMap<TreeNode, Integer>();

          return helper(root, memo);
     }

     public int helper(TreeNode node, HashMap<TreeNode, Integer> memo) {
          if (node == null) {
               return 0;
          }

          if (memo.containsKey(node)) {
               return memo.get(node);
          }

          int res = 0;
          int left_with     = helper(node.left, memo);
          int right_with    = helper(node.right, memo);
          int maxWithoutRoot = left_with + right_with;
          int maxWithRoot = 0;

          if (node.left != null) {
               maxWithRoot += helper(node.left.left, memo) + helper(node.left.right, memo);
          }

          if (node.right != null) {
               maxWithRoot += helper(node.right.left, memo) + helper(node.right.right, memo);
          }

          res = Math.max(maxWithRoot + node.val, maxWithoutRoot);

          return res;
     }
}
```