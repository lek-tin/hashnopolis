---
title: "Package Dependencies"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2020-01-02T18:19:16-08:00
lastmod: 2020-01-02T18:19:16-08:00
draft: false
archive: false
---
### Solution
```python
def package_dependencies(dependencies):
  result = []
  visiting = set([])
  visited = set([])

  def dfs(node):
    if node in visited:
      return

    visiting.add(node)

    for dependency in node.dependencies:
      if dependency in visiting:
        raise Exception("Have cycle in dependency graph.")
      if dependency not in visited:
        dfs(dependency)

    visiting.remove(node)
    visited.add(node)
    result.add(add)
```