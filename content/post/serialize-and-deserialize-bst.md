---
title: "Serialize and Deserialize BST"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bst"]
categories: ["algorithm"]
date: 2019-03-10T22:59:14-07:00
draft: false
archive: false
---
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a `binary search tree`. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a `binary search tree` can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

#### Note
Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

### Solution:
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
public class Codec {

    private void preOrder(TreeNode node, StringBuilder res) {
        if (node == null) return;

        res.append(node.val + ",");

        preOrder(node.left, res);
        preOrder(node.right, res);
    }
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) return "";

        StringBuilder res = new StringBuilder();
        preOrder(root, res);
        String resStr = res.toString();
        // Delete the trailing ","
        if (resStr.charAt(resStr.length() - 1) == ',') {
            resStr.substring(0,res.length()-1);
        }

        return res.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data == null || data.trim().equals("")) return null;

        String[] parts = data.split(",");
        Queue<Integer> queue = new LinkedList<>();
        for (String part: parts) {
            queue.offer(Integer.parseInt(part));
        }

        return build(queue);
    }
    // example:
    //      10
    //   8     15
    // 4  9  11  20
    private TreeNode build(Queue<Integer> q) {
        if (q.isEmpty()) return null;
        // 10
        TreeNode root = new TreeNode(q.poll());
        Queue<Integer> leftQ = new LinkedList<>();

        while(!q.isEmpty() && q.peek() < root.val) {
            leftQ.offer(q.poll());
        }
        // 8, 4, 9
        root.left = build(leftQ);
        // 15, 11, 20
        root.right = build(q);

        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```