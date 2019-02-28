---
title: "Meeting Rooms II"
description: "Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required."
authors: ["lek-tin"]
tags: ["leetcode", "python", "two-posinter", "greedy-algorithm"]
categories: ["algorithm"]
date: 2018-11-11T17:11:19-08:00
draft: false
archive: false
---
Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (s<sub>i</sub> < e<sub>i</sub>), find the minimum number of conference rooms required.

**Example 1:**
```
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
```
**Example 2:**
```
Input: [[7,10],[2,4]]
Output: 1
```
**Solution:**
```python
# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e
#         |____|    |_______|
#            |_______|   |____|
#           Number of meeting rooms: 2
class Solution(object):
    def minMeetingRooms(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: int
        """
        starts, ends = [], []
        length = len(intervals)
        for i in range(length):
            starts.append(intervals[i].start)
            ends.append(intervals[i].end)

        starts.sort()
        ends.sort()

        total = 0
        end = 0
        for i in range(length):
            if starts[i] < ends[end]:
                total += 1
            else:
                end += 1
        return total
```