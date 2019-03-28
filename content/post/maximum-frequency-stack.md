---
title: "Maximum Frequency Stack"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "stack"]
categories: ["algorithm"]
date: 2019-03-12T03:52:37-07:00
draft: false
archive: false
---
Implement `FreqStack`, a class which simulates the operation of a stack-like data structure.

`FreqStack` has two functions:  
1. `push(int x)`, which pushes an integer `x` onto the stack.  
2. `pop()`, which removes and returns the most frequent element in the stack.  
3. If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.  

### Example 1:
```
Input: 
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]
Explanation:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -> returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -> returns 5.
The stack becomes [5,7,4].

pop() -> returns 4.
The stack becomes [5,7].
```

### Note:
1. Calls to `FreqStack.push(int x)` will be such that `0 <= x <= 10^9`.
2. It is guaranteed that `FreqStack.pop()` won't be called if the stack has zero elements.
3. The total number of `FreqStack.push` calls will not exceed `10000` in a single test case.
4. The total number of `FreqStack.pop` calls will not exceed `10000` in a single test case.
5. The total number of `FreqStack.push` and `FreqStack.pop` calls will not exceed `150000` across all test cases.

### Solution
```java
class FreqStack {
    // num -> frequencies
    private HashMap<Integer, Integer> freq = new HashMap<>();
    // frequency -> stack of nums
    private HashMap<Integer, Stack<Integer>> map = new HashMap<>();
    private int maxFreq = 0;

    // push[5, 7, 5, 7, 5, 7, 4]
    // map  {
    //   1: 5, 7, 4
    //   2: 5, 7
    //   3: 5, 7
    // }
    // keys in map are consecutive
    public void push(int x) {
        int f = freq.getOrDefault(x, 0) + 1;
        freq.put(x, f);
        if (f > maxFreq) maxFreq = f;

        if (!map.containsKey(f)) map.put(f, new Stack<Integer>());
        map.get(f).add(x);
    }

    public int pop() {
        int i = map.get(maxFreq).pop();
        freq.put(i, maxFreq-1);

        if (map.get(maxFreq).size() == 0) maxFreq--;
        return i;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 */
```