---
title: "Team Scores in Football Tournament"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2020-03-27T00:37:45-07:00
lastmod: 2020-03-27T00:37:45-07:00
draft: false
archive: false
---

### Solution (Union)

```sql
SELECT t.team_id,
       t.team_name,
       IFNULL(SUM(p.points), 0) AS num_points
FROM Teams t

LEFT JOIN

(
    SELECT host_team as team_id,
        CASE
            WHEN host_goals > guest_goals THEN 3
            WHEN host_goals = guest_goals THEN 1
            ELSE 0
        END as points
    FROM Matches

    UNION ALL

    SELECT guest_team as team_id,
        CASE
            WHEN host_goals < guest_goals THEN 3
            WHEN host_goals = guest_goals THEN 1
            ELSE 0
        END as points
    FROM Matches

) AS p

ON t.team_id = p.team_id
GROUP BY t.team_id
ORDER BY num_points DESC, team_id
```
