---
title: "Valid Perfect Square"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search", "newton-method", "math"]
categories: ["algorithm"]
date: 2019-09-19T23:47:10-07:00
lastmod: 2020-05-09T23:47:10-07:00
draft: false
archive: false
---
Given a positive integer num, write a function which returns `True` if num is a perfect square else `False`.

#### Note
Do not use any built-in library function such as sqrt.

### Example 1
```
Input: 16
Output: true
```
### Example 2
```
Input: 14
Output: false
```

### Solution (naive)

Java
```java
class Solution {
    public boolean isPerfectSquare(int num) {
        if (num == 1) return true;

        for (int i = 2; i < num; i++) {
            if (i * i == num) {
                return true;
            }

            if (i * i > num) {
                break;
            }
        }

        return false;
    }
}
```

### Solution (Binary Search version 1)

Let `x` be the square root, `1 < x < num/2` always holds `true`.  
Python  
```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        left, right = 0, num

        while left <= right:
            mid = left + (right-left)//2
            guess = mid*mid
            if guess == num:
                return True
            if guess < num:
                left = mid + 1
            else:
                right = mid - 1

        return False
```

Java
```java
class Solution {
    public boolean isPerfectSquare(int num) {
        if (num == 1) return true;

        long left = 1;
        long right = num;

        while (left+1 < right) {
            long mid = left + (right - left) / 2;
            long guess = mid * mid;
            if (guess == num) {
                return true;
            } else if (guess > num) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left*left == num || right*right==num;
    }
}
```

### Solution (Binary Search version 2)

Time: `O(logN)`  
Space: `O(1)`  
```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        factor = num // 2
        while factor*factor > num:
            factor //= 2

        for i in range(factor, factor*2+1):
            if i*i == num:
                return True

        return False
```

### Solution (Newton's method)

Time: `O(logN)`  
Space: `O(1)`  
```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        # newton's method
        # f(x) = x^2 - num = 0
        # x_next = x - f(x) / f'(x)
        # f(x) = x^2 -num, f'(x) = 2x
        # x_next = (x + num/x) / 2
        x = num // 2
        while x*x > num:
            x = (x + num//x) // 2

        return x*x == num
```
