SELECT name from Employee WHERE salary > (
    SELECT min(salary) FROM Employee WHERE managerId != NULL
  ) AND managerId == NULL