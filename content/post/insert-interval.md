---
title: "57. Insert Interval"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-08-26T00:43:48+08:00
draft: false
archive: false
---
Given a set of **non-overlapping** intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

**Example 1:**
```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```
**Example 2:**
```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```
**Solution:**
```python
# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e
class Solution:
    def insert(self, intervals, newInterval):
        """
        :type intervals: List[Interval]
        :type newInterval: Interval
        :rtype: List[Interval]
        """
        if intervals == None or len(intervals) < 0:
            return []

        res, i, listLen = [], 0, len(intervals) 
        #       |__|            |__|   |__|   |__|            |__|
        #                         |_____________|
        #   1: no overlapping       2: overlapping           3: no overlapping

        # 1: no overlapping
        while i < listLen and intervals[i].end < newInterval.start:
            res.append(intervals[i])
            i += 1
        # 2: overlapping
        while i < listLen and intervals[i].start <= newInterval.end:
            newInterval.start = min(intervals[i].start, newInterval.start)
            newInterval.end = max(intervals[i].end, newInterval.end)
            i += 1
        print(newInterval.start, newInterval.end)
        res.append(newInterval)
        # 3: no overlapping
        while i < listLen:
            res.append(intervals[i])
            i += 1

        return res
```