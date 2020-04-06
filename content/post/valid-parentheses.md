---
title: "Valid Parentheses"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2018-11-02T20:30:23-07:00
draft: false
archive: false
---
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

### Example 1
```
Input: "()"
Output: true
```
### Example 2
```
Input: "()[]{}"
Output: true
```
### Example 3
```
Input: "(]"
Output: false
```
### Example 4
```
Input: "([)]"
Output: false
```
### Example 5
```
Input: "{[]}"
Output: true
```
### Solution:
```java
class Solution {
    public boolean isValid(String s) {

        HashMap<Character, Character> charMap = new HashMap<>();
        charMap.put(')', '(');
        charMap.put(']', '[');
        charMap.put('}', '{');
        Stack<Character> stack = new Stack<Character>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (charMap.containsValue(c)) {
                stack.push(c);
            } else if (charMap.containsKey(c)) {
                if (stack.isEmpty() || charMap.get(c) != stack.pop())
                    return false;
            } else {
                return false;
            }
        }

        return stack.isEmpty();
    }
}
```
```python
class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        dict = {
            "]": "[",
            "}": "{",
            ")": "("
        }
        for char in s:
            if char in dict.values():
                stack.append(char)
            elif char in dict.keys():
                if stack == [] or dict[char] != stack.pop():
                    return False
            else:
                return False
        return stack == []
```