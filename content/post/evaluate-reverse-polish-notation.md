---
title: "Evaluate Reverse Polish Notation"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2020-03-12T15:32:20-07:00
lastmod: 2020-03-12T15:32:20-07:00
draft: false
archive: false
---
Evaluate the value of an arithmetic expression in **Reverse Polish Notation**.  

Valid operators are `+, -, *, /`. Each operand may be an integer or another expression.  

##### Note

1. Division between two integers should truncate toward zero.
2. The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

### Example 1

```
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

### Example 2

```
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

### Example 3

```
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

### Solution

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        if not tokens:
            return None

        stack = []
        operators = set(["+", "-", "*", "/"])
        N = len(tokens)
        curr = 0

        while curr < N:
            while curr < N and tokens[curr] not in operators:
                stack.append(tokens[curr])
                curr += 1
            while curr < N and tokens[curr] in operators:
                op1 = int(stack.pop())
                op2 = int(stack.pop())
                temp = 0

                if tokens[curr] == "+":
                    temp = op2 + op1
                elif tokens[curr] == "-":
                    temp = op2 - op1
                elif tokens[curr] == "*":
                    temp = op2 * op1
                elif tokens[curr] == "/":
                    temp = int(op2 / op1)

                stack.append(temp)
                curr += 1

        return stack.pop()
```