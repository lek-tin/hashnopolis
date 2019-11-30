---
title: "23. Merge k Sorted Lists"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "heap", "merge"]
categories: ["algorithm"]
date: 2018-08-26T17:54:18+08:00
lastmod: 2019-10-14T17:54:18+08:00
draft: false
archive: false
---
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

### Example:
```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

### Solution:
Idea #1 - Brute force with sorting first:  
Time complexity : `O(NlogN)`  
Space complexity : `O(N)`  

Idea #2 - Compare head nodes one by one:  
Time complexity : `O(kN)`  
Space complexity : `O(N)`  

Idea #3 - Merge lists one by one:  
Time complexity : `O(kN)`  
Space complexity : `O(N)`  

Idea #4 - Merge with divide and conquer  
Time complexity: `O(Nlogk)`  
Space complexity : `O(N)`  

Idea #5 - Merge with priority queue  
Time complexity: `O(Nlogk)`  
Space complexity : `O(N)`  

`k` is the number of linked lists.
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
# time: o(nlogK), where k is the number of linked lists
# space: o(n)
# l1: xxxxx
# l2: xxxxx  ------> merge(l1, l2) = n  ---↓
# l3: xxxxx                                ↓
# l4: xxxxx  ------> merge(l3, l4) = m  --->-->  merge(n, m)
class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        if list is None or len(lists) == 0:
            return []
        return self.sort(lists, 0, len(lists)-1)

    def sort(self, lists, low, high):
        if low >= high:
            return lists[low]

        mid = (high - low) // 2 + low
        l1 = self.sort(lists, low, mid)
        l2 = self.sort(lists, mid+1, high)
        return self.merge(l1, l2)

    def merge(self, l1, l2):
        if l1 is None:
            return l2
        if l2 is None:
            return l1
        if l1.val < l2.val:
            l1.next = self.merge(l1.next, l2)
            return l1
        else:
            l2.next = self.merge(l1, l2.next)
            return l2
```
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;

        PriorityQueue<ListNode> queue = new PriorityQueue<ListNode>(lists.length, new Comparator<ListNode>(){
            @Override
            public int compare(ListNode o1, ListNode o2){
                // Ascending
                if (o1.val < o2.val)
                    return -1;
                // No change
                else if (o1.val == o2.val)
                    return 0;
                // Descending
                else
                    return 1;
                // A more concise way to write it is as below,
                // return o1.val - o2.val;
            }
        });

        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        for (ListNode node: lists)
            if (node != null)
                queue.add(node);

        while (!queue.isEmpty()){
            tail.next = queue.poll();
            tail = tail.next;
            // add the next node to the min heap
            if (tail.next != null)
                queue.add(tail.next);
        }

        return dummy.next;
    }
}
```
Python heap
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
import heapq

ListNode.__lt__ = lambda x, y: (x.val < y.val)

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists:
            return None

        dummy = ListNode(0)
        curr = dummy

        heap = []

        for head in lists:
            if head:
                heapq.heappush(heap, head)

        while heap:
            node = heapq.heappop(heap)
            curr.next = node
            curr = node
            if node.next:
                heapq.heappush(heap, node.next)

        return dummy.next
```
Python PriorityQueue:
```python
from Queue import PriorityQueue

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        dummy = head = ListNode(0)
        pq = PriorityQueue()

        for l in lists:
            if l:
                pq.put((l.val, l))

        while not pq.empty():
            val, node = pq.get()
            head.next = ListNode(val)
            head = head.next
            node = node.next
            if node:
                pq.put((node.val, node))

        return dummy.next
```