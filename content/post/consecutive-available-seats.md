---
title: "Consecutive Available Seats"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-31T02:16:23-07:00
lastmod: 2020-03-31T02:16:23-07:00
draft: false
archive: false
---
Several friends at a cinema ticket office would like to reserve consecutive available seats.
Can you help to query all the consecutive available seats order by the `seat_id` using the following `cinema` table?

```
| seat_id | free |
|---------|------|
| 1       | 1    |
| 2       | 0    |
| 3       | 1    |
| 4       | 1    |
| 5       | 1    |
```

Your query should return the following result for the sample case above.

```
| seat_id |
|---------|
| 3       |
| 4       |
| 5       |
```

#### Note
- The seat_id is an auto increment int, and free is bool ('`1'` means free, and `'0' `means occupied.).
- Consecutive available seats are more than 2(inclusive) seats consecutively available.

### Solution (inner join)

```sql
SELECT
    distinct a.seat_id
FROM
    cinema a
JOIN
    cinema b
ON
    abs(a.seat_id - b.seat_id) = 1
    AND
    a.free = 1 and b.free = 1
ORDER BY
    a.seat_id

-- a join b = {"headers": ["seat_id", "free", "seat_id", "free"], "values": [[3, 1, 4, 1], [4, 1, 3, 1], [4, 1, 5, 1], [5, 1, 4, 1]]}
```
