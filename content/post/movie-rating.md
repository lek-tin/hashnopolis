---
title: "Movie Rating"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-29T23:27:25-07:00
lastmod: 2020-03-29T23:27:25-07:00
draft: false
archive: false
---
Table: `Movies`

```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| movie_id      | int     |
| title         | varchar |
+---------------+---------+
movie_id is the primary key for this table.
title is the name of the movie.
```

Table: `Users`

```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| name          | varchar |
+---------------+---------+
user_id is the primary key for this table.
```

Table: `Movie_Rating`

```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| movie_id      | int     |
| user_id       | int     |
| rating        | int     |
| created_at    | date    |
+---------------+---------+
(movie_id, user_id) is the primary key for this table.
This table contains the rating of a movie by a user in their review.
created_at is the user's review date.
```

Write the following SQL query:

1. Find the name of the user who has rated the greatest number of the movies. In case of a tie, return lexicographically smaller user name.

2. Find the movie name with the highest average rating in February 2020. In case of a tie, return lexicographically smaller movie name.

Query is returned in 2 rows, the query result format is in the folowing example:  

```
Movies table:
+-------------+--------------+
| movie_id    |  title       |
+-------------+--------------+
| 1           | Avengers     |
| 2           | Frozen 2     |
| 3           | Joker        |
+-------------+--------------+

Users table:
+-------------+--------------+
| user_id     |  name        |
+-------------+--------------+
| 1           | Daniel       |
| 2           | Monica       |
| 3           | Maria        |
| 4           | James        |
+-------------+--------------+

Movie_Rating table:
+-------------+--------------+--------------+-------------+
| movie_id    | user_id      | rating       | created_at  |
+-------------+--------------+--------------+-------------+
| 1           | 1            | 3            | 2020-01-12  |
| 1           | 2            | 4            | 2020-02-11  |
| 1           | 3            | 2            | 2020-02-12  |
| 1           | 4            | 1            | 2020-01-01  |
| 2           | 1            | 5            | 2020-02-17  | 
| 2           | 2            | 2            | 2020-02-01  | 
| 2           | 3            | 2            | 2020-03-01  |
| 3           | 1            | 3            | 2020-02-22  | 
| 3           | 2            | 4            | 2020-02-25  | 
+-------------+--------------+--------------+-------------+

Result table:
+--------------+
| results      |
+--------------+
| Daniel       |
| Frozen 2     |
+--------------+

Daniel and Maria have rated 3 movies ("Avengers", "Frozen 2" and "Joker") but Daniel is smaller lexicographically.
Frozen 2 and Joker have a rating average of 3.5 in February but Frozen 2 is smaller lexicographically.
```

### Solution

```sql
(
    SELECT b.name AS results
    FROM
        (
            SELECT   mr.user_id, COUNT(*) AS cnt
            FROM     movie_rating mr
            GROUP BY mr.user_id
        ) a

        INNER JOIN users b

        ON a.user_id = b.user_id

    ORDER  BY a.cnt DESC, b.name ASC
    LIMIT  1
)

UNION ALL

(
    SELECT d.title AS results
    FROM
        (
            SELECT   mr.movie_id, AVG(rating) as rating
            FROM     movie_rating mr
            -- WHERE MONTH(mr.created_at) = 2
            WHERE  mr.created_at BETWEEN '2020-02-01' AND '2020-02-29'
            GROUP BY mr.movie_id
        ) c

        INNER JOIN movies d

        ON c.movie_id = d.movie_id
    ORDER BY c.rating DESC, d.title ASC
    LIMIT 1
)
```
