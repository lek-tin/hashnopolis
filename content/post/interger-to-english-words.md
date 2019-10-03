---
title: "Interger to English Words"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-11-11T13:27:05-08:00
lastmod: 2019-10-02T13:27:05-08:00
draft: false
archive: false
---
Convert a **non-negative** integer to its english words representation. Given input is guaranteed to be less than `231 - 1`.

### Example 1
```
Input: 123
Output: "One Hundred Twenty Three"
```
### Example 2
```
Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
```
### Example 3
```
Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```
### Example 4
```
Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven 
Thousand Eight Hundred Ninety One"
```
### Solution
```python
class Solution:
    def __init__(self):
        self.lessThan20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
        self.tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        self.thousands = ["", "Thousand", "Million", "Billion", "Trillion]

    def numberToWords(self, num):
        """
        :type num: int
        :rtype: str
        """
        if num == 0:
            return "Zero";

        i = 0;
        words = ""

        while num > 0:
            n = num % 1000
            if n != 0:
                words = self.helper(n) + self.thousands[i] + " " + words
            num //= 1000
            i += 1

        return words.strip()

    def helper(self, num):
        if num == 0:
            return ""
        elif num < 20:
            return self.lessThan20[int(num)] + " "
        elif num < 100:
            # Any number under 100 can be decomposed to tens + a single digit
            return self.tens[num // 10] + " " + self.helper(num % 10)
        else:
            return self.lessThan20[num // 100] + " Hundred " + self.helper(num % 100)
```
Iterative
```python
class Solution:
    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"

        underTwenty = {
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine",
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen"
        }
        tens = {
            20: "Twenty",
            30: "Thirty",
            40: "Forty",
            50: "Fifty",
            60: "Sixty",
            70: "Seventy",
            80: "Eighty",
            90: "Ninety",
        }
        thousands = {
            1: "",
            1000: "Thousand",
            1000000: "Million",
            1000000000: "Billion"
        }

        words = []

        for denome in [1000000000, 1000000, 1000, 1]:
            temp = num//denome
            num %= denome
            if temp > 0:
                hundreds = temp // 100
                if hundreds > 0:
                    words.append(underTwenty[hundreds])
                    words.append("Hundred")
                temp %= 100
                if temp >= 20:
                    digit = temp % 10
                    words.append(tens[temp-digit])
                    if digit > 0:
                        words.append(underTwenty[digit])
                elif temp > 0:
                    words.append(underTwenty[temp])

                words.append(thousands[denome])

        return " ".join(words).strip()
```