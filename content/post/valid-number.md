---
title: "Valid Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math", "string", "deterministic-finite-automaton"]
categories: ["algorithm"]
date: 2018-09-05T23:43:50+08:00
draft: false
archive: false
---
Validate if a given string can be interpreted as a decimal number.  

**Some examples:**
`"0" => true`  
`" 0.1 " => true`  
`"abc" => false`  
`"1 a" => false`  
`"2e10" => true`  
`" -90e3   " => true`  
`" 1e" => false`  
`"e3" => false`  
`" 6e-1" => true`  
`" 99e2.5 " => false`  
`"53.5e93" => true`  
`" --6 " => false`  
`"-+3" => false`  
`"95a54e53" => false`  

##### Note
It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

1. Numbers `0-9`
2. Exponent - `"e"`
3. Positive/negative sign - `"+"/"-"`
4. Decimal point - `"."`

Of course, the context of these characters also matters in the input.

#### Update (2015-02-10)

The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition.

### Solution (naive)

using builtin function in python
```python
class Solution:
    def isNumber(self, s: str) -> bool:
        try:
            float(s)
            return True
        except ValueError:
            return False
```

### Solution (using flags: without natural number e)

```python
class Solution:
    def isNumberWithoutE(self, s: str) -> bool:
        s = s.strip()
        N = len(s)

        if N == 0:
            return False

        hasSeenDot, hasSeenNum = False, False

        for i in range(len(s)):
            currChar = s[i]
            # Number
            if ord("0") <= ord(currChar) <= ord("9"):
                hasSeenNum = True
            # dot
            elif currChar == ".":
                if hasSeenDot:
                    print(currChar,": invalid '.'")
                    return False
                hasSeenDot = True
            # +/- sign
            elif currChar in "+-":
                # +/- at invalid position
                if i != 0:
                    print(currChar, ": +/- at invalid position")
                    return False
            # illegal characters
            else:
                print(currChar, ": illegal characters")
                return False

        return hasSeenNum
```

### Solution (using flags: with natural number e)

```python
class Solution:
    def isNumber(self, s: str) -> bool:
        s = s.strip()
        N = len(s)

        if N == 0:
            return False

        hasSeenE, hasSeenDot, hasSeenNum, numAfterE = False, False, False, False

        for i in range(len(s)):
            currChar = s[i]
            # Number
            if ord("0") <= ord(currChar) <= ord("9"):
                hasSeenNum = True
                numAfterE = True
            # e
            elif currChar == "e":
                if hasSeenE or not hasSeenNum:
                    print(currChar,": invalid 'e'")
                    return False
                hasSeenE = True
                numAfterE = False
            # dot
            elif currChar == ".":
                if hasSeenE or hasSeenDot:
                    print(currChar,": invalid '.'")
                    return False
                hasSeenDot = True
            # +/- sign
            elif currChar in "+-":
                # +/- at invalid position
                if i != 0 and s[i-1] != "e":
                    print(currChar, ": +/- at invalid position")
                    return False
            # illegal characters
            else:
                print(currChar, ": illegal characters")
                return False

        return hasSeenNum and numAfterE
```

### Solution (Deterministic finite automaton)

```python
class Solution:
    def isNumber(self, s: str) -> bool:
        INVALID = 0
        SPACE = 1
        SIGN = 2
        DIGIT = 3
        DOT = 4
        NATURAL_NUM = 5
        # row: state; col: token
        transition_table = [
            [-1, 0, 3, 1, 2,-1], # next states for state 0
            [-1, 8,-1, 1, 4, 5], # next states for state 1
            [-1,-1,-1, 4,-1,-1], # next states for state 2
            [-1,-1,-1, 1, 2,-1], # next states for state 3
            [-1, 8,-1, 4,-1, 5], # next states for state 4
            [-1,-1, 6, 7,-1,-1], # next states for state 5
            [-1,-1,-1, 7,-1,-1], # next states for state 6
            [-1, 8,-1, 7,-1,-1], # next states for state 7
            [-1, 8,-1,-1,-1,-1], # next states for state 8
        ]
        # Starting state
        state = 0
        for char in s:
            if state==-1:
                return False
            if char==" ":
                token = SPACE
            elif char in "-+":
                token = SIGN
            elif char in map(str, range(10)):
                token = DIGIT
            elif char==".":
                token = DOT
            elif char in "Ee":
                token = NATURAL_NUM
            else:
                token = INVALID

            state = transition_table[state][token]
        if state in (1, 4, 7, 8):  # accept state
            return True
        else:
            return False
```
![valid number deterministic finite automaton](/img/post/valid-number-deterministic-finite-automaton.png)