---
title: "Fizz Buzz Multithreaded"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "multi-threading"]
categories: ["algorithm"]
date: 2020-04-06T19:15:52-07:00
lastmod: 2020-04-06T19:15:52-07:00
draft: false
archive: false
---

Write a program that outputs the string representation of numbers from `1` to `n`, however:

1. If the number is divisible by 3, output `"fizz"`.
2. If the number is divisible by 5, output `"buzz"`.
3. If the number is divisible by both 3 and 5, output `"fizzbuzz"`.

For example, for `n = 15`, we output: `1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz.`

Suppose you are given the following code:

```
class FizzBuzz {
  public FizzBuzz(int n) { ... }               // constructor
  public void fizz(printFizz) { ... }          // only output "fizz"
  public void buzz(printBuzz) { ... }          // only output "buzz"
  public void fizzbuzz(printFizzBuzz) { ... }  // only output "fizzbuzz"
  public void number(printNumber) { ... }      // only output the numbers
}
```

Implement a multithreaded version of ``FizzBuzz`` with four threads. The same instance of ``FizzBuzz`` will be passed to four different threads:

1. Thread A will call `fizz()` to check for divisibility of 3 and outputs `fizz`.
2. Thread B will call `buzz()` to check for divisibility of 5 and outputs `buzz`.
3. Thread C will call `fizzbuzz()` to check for divisibility of 3 and 5 and outputs fizzbuzz.
4. Thread D will call `number()` which should only output the numbers.

### Solution

```python
import threading

class FizzBuzz:
    def __init__(self, n: int):
        self.funcNum = 4
        self.n = n
        self.curr = 0
        self.cv = threading.Condition()

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
    	for i in range(1, self.n+1):
            with self.cv:
                # wait for the printFizz lock to UNLOCK
                while self.curr % self.funcNum != 0:
                    self.cv.wait()
                self.curr += 1
                if i % 3 == 0 and i % 5 != 0:
                    printFizz()
                # notify printBuzz, printFizzBuzz, printNumber that the printFizz lock has been UNLOCKED
                self.cv.notify_all()

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
    	for i in range(1, self.n+1):
            with self.cv:
                # wait for the printBuzz lock to UNLOCK
                while self.curr % self.funcNum != 1:
                    self.cv.wait()
                self.curr += 1
                if i % 3 != 0 and i % 5 == 0:
                    printBuzz()
                # notify printFizz, printFizzBuzz, printNumber that the printBuzz lock has been UNLOCKED
                self.cv.notify_all()

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        for i in range(1, self.n+1):
            with self.cv:
                # wait for the fizzbuzz lock to UNLOCK
                while self.curr % self.funcNum != 2:
                    self.cv.wait()
                self.curr += 1
                if i % 3 == 0 and i % 5 == 0:
                    printFizzBuzz()
                # notify printFizz, printBuzz, printNumber that the printFizzBuzz lock has been UNLOCKED
                self.cv.notify_all()

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n+1):
            with self.cv:
                # wait for the printNumber lock to UNLOCK
                while self.curr % self.funcNum != 3:
                    self.cv.wait()
                self.curr += 1
                if i % 3 != 0 and i % 5 != 0:
                    printNumber(i)
                # notify printFizz, printBuzz, printFizzBuzz that the printNumber lock has been UNLOCKED
                self.cv.notify_all()
```
