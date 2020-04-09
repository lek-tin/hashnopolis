---
title: "Nth Highest Salary"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-04-07T00:32:48-07:00
lastmod: 2020-04-07T00:32:48-07:00
draft: false
archive: false
---

Write a SQL query to get the nth highest salary from the `Employee` table.

```
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```

For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.

```
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
```

### Solution

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN

DECLARE M INT;
SET M = N - 1;

  RETURN (
    SELECT
        IFNULL(
            (
                SELECT
                    DISTINCT Salary
                FROM
                    Employee
                ORDER BY Salary Desc
                LIMIT 1
                OFFSET M
            ),
            NULL
        )
  );
END
```
