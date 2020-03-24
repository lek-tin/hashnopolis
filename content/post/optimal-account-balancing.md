---
title: "Optimal Account Balancing"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2020-03-23T05:02:54-07:00
lastmod: 2020-03-23T05:02:54-07:00
draft: false
archive: false
---
A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a `tuple (x, y, z)` which means person x gave person y $z. Assuming Alice, Bill, and Chris are person `0, 1, and 2` respectively (`0, 1, 2` are the person's ID), the transactions can be represented as `[[0, 1, 10], [2, 0, 5]]`.  

Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.  

#### Note

1. A transaction will be given as a `tuple (x, y, z)`. Note that `x ≠ y` and `z > 0`.
2. Person's IDs may not be linear, e.g. we could have the persons `0, 1, 2` or we could also have the persons `0, 2, 6`.

### Example 1

```
Input:
[[0,1,10], [2,0,5]]

Output:
2

Explanation:
Person #0 gave person #1 $10.
Person #2 gave person #0 $5.

Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.
```

### Example 2

```
Input:
[[0,1,10], [1,0,1], [1,2,5], [2,0,5]]

Output:
1

Explanation:
Person #0 gave person #1 $10.
Person #1 gave person #0 $1.
Person #1 gave person #2 $5.
Person #2 gave person #0 $5.

Therefore, person #1 only need to give person #0 $4, and all debt is settled.
```

### Solution

```python
import math

class Solution:
    def minTransfers(self, transactions: List[List[int]]) -> int:
        self.res = math.inf
        # when debts are settled, in + out = 0
        accounts = collections.defaultdict(int)
        for transaction in transactions:
            accounts[transaction[0]] += transaction[2]
            accounts[transaction[1]] -= transaction[2]

        print(accounts)
        # generate debts if account is non-zero
        debts = [account for account in accounts.values() if account]
        print(debts)

        # dfs for the minimal # of transactions
        self.helper(debts, 0, 0)

        return self.res

    def helper(self, debts, start, cnt):
        n = len(debts)
        print(start, n)

        while start < n and debts[start] == 0:
            start += 1

        # everyone has been checked
        if start == n:
            self.res = min(self.res, cnt)
            return

        # check all remaining people
        for i in range(start+1, n):
            # when i owes/start owns or i owns/start owes
            if (debts[i] < 0 and debts[start] > 0) or (debts[i] > 0 and debts[start] < 0):
                # include a transaction
                debts[i] += debts[start]
                # count++ because
                self.helper(debts, start + 1, cnt + 1)
                # undo the previous transaction, continue dfs
                debts[i] -= debts[start]
```

#### Similar problem:

1. [evaluate division](/post/evaluate-division)