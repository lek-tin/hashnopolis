---
title: "Rank Scores"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-03T16:56:09-08:00
lastmod: 2020-03-03T16:56:09-08:00
draft: true
archive: false
---
Write a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" between ranks.

```
+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
```

For example, given the above `Scores` table, your query should generate the following report (order by highest score):

```
+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
```

### Solution (COUNT)

For each score in Scores, count how many scores in t are larger than or equal to it:
```sql
SELECT s.Score,
        COUNT(t.Score) AS Rank
FROM
  (SELECT DISTINCT Score FROM Scores) AS t, Scores AS s
    WHERE
      s.Score <= t.Score
    GROUP BY
      s.Id, s.Score
    ORDER BY
      s.Score DESC
```

### Solution (row variable)

```sql
SELECT s.Score, r.Rank
FROM (
    --  Subquery 2: Generate row_number
    SELECT Score, (@row_number:=@row_number + 1) AS `Rank`
    FROM (
        -- Subquery 1: Generate ranked, unique scores
        SELECT Score
        FROM Scores
        GROUP BY Score
        ORDER BY Score DESC
    ) AS s, (SELECT @row_number:=0) AS dummie
) AS r
RIGHT JOIN Scores AS s
    ON s.Score = r.Score
ORDER BY r.Rank;
```

If we have version 8, we can use ROW_NUMBER() OVER() to solve this easily.