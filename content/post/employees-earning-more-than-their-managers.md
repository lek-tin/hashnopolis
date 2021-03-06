---
title: "Employees Earning More Than Their Managers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sql"]
categories: ["database"]
date: 2018-09-12T23:57:13+08:00
lastmod: 2020-03-02T23:57:13+08:00
draft: false
archive: false
---

```
# SQL Schema:
Create table If Not Exists Employee (Id int, Name varchar(255), Salary int, ManagerId int)
Truncate table Employee
insert into Employee (Id, Name, Salary, ManagerId) values ('1', 'Joe', '70000', '3')
insert into Employee (Id, Name, Salary, ManagerId) values ('2', 'Henry', '80000', '4')
insert into Employee (Id, Name, Salary, ManagerId) values ('3', 'Sam', '60000', 'None')
insert into Employee (Id, Name, Salary, ManagerId) values ('4', 'Max', '90000', 'None')
```

The `Employee` table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.
```
+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
```
Given the `Employee` table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.
```
+----------+
| Employee |
+----------+
| Joe      |
+----------+
```

### Solution (where)

`WHERE`: Select from two tables will get the `Cartesian` product of these two tables. In this case, the output will be `4*4 = 16` records. However, what we interest is the employee's salary higher than his/her manager. So we should add two conditions in a WHERE clause like below.
```sql
SELECT
    a.Name AS 'Employee'
FROM
    Employee AS a,
    Employee AS b
WHERE
    a.ManagerId = b.Id AND a.Salary > b.Salary
```

### Solution (join)

more efficient than using `where`
```sql
SELECT
     a.NAME AS Employee
FROM
    Employee AS a
JOIN
    Employee AS b
ON a.ManagerId = b.Id
AND a.Salary > b.Salary
```
