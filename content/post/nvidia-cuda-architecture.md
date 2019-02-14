---
title: "Nvidia Cuda Architecture"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["gpu", "parallel-programming", "nvidia", "cuda"]
categories: ["computer-architecture"]
date: 2019-01-18T22:38:09-08:00
draft: false
archive: false
---
### Fundamental concepts/components in the CUDA architecture:  
1. thread:  
2. core/kernel:  
4. Block: a collection of parallel threads.  
5. Grid: a collection of parallel thread blocks.  
6. warp: a set of threads (commonly 32) that get executed simultaneously. Thread blocks are executed as smaller groups of threads known as "warps" in sequence.
7. streaming multiprocessor: the number of blocks per grid is limited by SM. Waprs are scheduled to execute in SMs.
8. texture:  
9. control divergency:  
10. CPU DMA:  
11. Shared memory: shared memory is much faster than local and global memory. Because it is on-chip, in fact, shared memory latency is roughly 100x lower than uncached global memory latency (provided that there are no bank conflicts between the threads. Threads within a thread block can cooperate via the shared memory.
12. warp occupancy:  
13. Local memory: "Local memory" in CUDA is actually global memory (and should really be called "thread-local global memory") with interleaved addressing (which makes iterating over an array in parallel a bit faster than having each thread's data blocked together).  

### APIs:
1. `__syncthreads`: synchronize all threads in the block.  
2. `cudaThreadSynchronize()`: used when measuring performance to ensure that all device operations have completed before stopping the timer.

### Events:  