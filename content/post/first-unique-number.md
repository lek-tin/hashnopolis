---
title: "First Unique Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-hashmap"]
categories: ["algorithm"]
date: 2020-04-28T03:53:12-07:00
lastmod: 2020-04-28T03:53:12-07:00
draft: false
archive: false
---

You have a queue of integers, you need to retrieve the first unique integer in the queue.  

Implement the `FirstUnique` class:

1. `FirstUnique(int[] nums)` Initializes the object with the numbers in the queue.
2. `int showFirstUnique()` returns the value of the first unique integer of the queue, and returns `-1` if there is no such integer.
3. `void add(int value)` insert value to the queue.

### Example 1

```
Input: 
["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
[[[2,3,5]],[],[5],[],[2],[],[3],[]]
Output: 
[null,2,null,2,null,3,null,-1]

Explanation: 
FirstUnique firstUnique = new FirstUnique([2,3,5]);
firstUnique.showFirstUnique(); // return 2
firstUnique.add(5);            // the queue is now [2,3,5,5]
firstUnique.showFirstUnique(); // return 2
firstUnique.add(2);            // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique(); // return 3
firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // return -1
```

### Example 2

```
Input: 
["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
Output: 
[null,-1,null,null,null,null,null,17]

Explanation: 
FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
firstUnique.showFirstUnique(); // return -1
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
firstUnique.showFirstUnique(); // return 17
```

### Example 3

```
Input: 
["FirstUnique","showFirstUnique","add","showFirstUnique"]
[[[809]],[],[809],[]]
Output: 
[null,809,null,-1]

Explanation: 
FirstUnique firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // return 809
firstUnique.add(809);          // the queue is now [809,809]
firstUnique.showFirstUnique(); // return -1
```

#### Constraints:

1. `1 <= nums.length <= 10^5`
2. `1 <= nums[i] <= 10^8`
3. `1 <= value <= 10^8`
4. At most `50000` calls will be made to `showFirstUnique` and add.

### Solution (queue: time limit exceeded)

Java
```java
class FirstUnique {
    Queue<Integer> queue;
    HashMap<Integer, Integer> counter;
    int firstUnique;
    public FirstUnique(int[] nums) {
        queue = new LinkedList<>();
        counter = new HashMap<>();
        for (int num: nums) {
            add(num);
        }
    }

    public int showFirstUnique() {
        return queue.peek() != null ? queue.peek() : -1;
    }

    public void add(int value) {
        counter.put(value, counter.getOrDefault(value, 0) + 1);
        if (counter.get(value) > 1) {
            queue.remove(value);
        } else {
            queue.add(value);
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */
```


### Solution (linked Hashmap)

Java
```java
import java.util.Deque;

class FirstUnique {
    LinkedHashMap<Integer, Integer> lhmap;
    HashSet<Integer> garbage;
    int firstUnique;
    public FirstUnique(int[] nums) {
        lhmap = new LinkedHashMap<>();
        garbage = new HashSet<>();
        for (int num: nums) {
            add(num);
        }
    }

    public int showFirstUnique() {
        Set<Map.Entry<Integer, Integer>> entries = lhmap.entrySet();
        Iterator<Map.Entry<Integer, Integer>> it = entries.iterator();
        return it.hasNext() ? it.next().getKey() : -1;
    }

    public void add(int value) {
        if (garbage.contains(value)) {
            return;
        }

        if (lhmap.getOrDefault(value, 0) == 0) {
            lhmap.put(value, 1);
        } else {
            lhmap.remove(value);
            garbage.add(value);
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */
```
