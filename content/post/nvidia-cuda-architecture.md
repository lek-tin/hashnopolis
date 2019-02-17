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
7. streaming multiprocessor: the number of blocks per grid is limited by SM. Waprs are scheduled to execute in SMs. Streaming Multiprocessor has a Shared Memory. (Hence "private", like a private programmer-controlled L1 cache). Each thread block can allocate shared memory where the allocations are private to that thread block. If there are multiple thread blocks in the same Streaming Multiprocessor, each thread blocks' shared memory allocation is in the same physical shared memory, but the contents are private to each thread block. (The content of `block 0`'s shared memory is not visible to `block 1`'s, etc.)
8. texture:  
9. control divergency:  
10. CPU DMA:  
11. Shared memory: shared memory is much faster than local and global memory. Because it is on-chip, in fact, shared memory latency is roughly 100x lower than uncached global memory latency (provided that there are no bank conflicts between the threads. Threads within a thread block can cooperate via the shared memory.
12. warp occupancy:  
13. Local memory: "Local memory" in CUDA is actually global memory (and should really be called "thread-local global memory") with interleaved addressing (which makes iterating over an array in parallel a bit faster than having each thread's data blocked together).  

### APIs:
1. `__syncthreads`: wait for all threads in the block to finish an instruction.  
2. `cudaThreadSynchronize()`: used when measuring performance to ensure that all device operations have completed before stopping the timer.
3. `cudaGetDeviceCount(int *count)`:  
4. `cudaSetDevice(int device)`:  
5. `cudaGetDevice(int *device)`:  
6. `cudaGetDeviceProperties(cudaDeviceProp *prop, int device)`:  
7. `cudaSetDevice(i)`: to select current device  
8. `cudaMemcpy(...)`: for peer-to-peer copies  

### Events:  

### Performance:
1. Warp divergence: mainly caused by the SIMT execution model where 32 threads in a warp must execute the same instruction (all share the same Program Counter). Due to this, if threads diverge and operate on different instructions, the execution becomes serialized.
2. Maximum number of threads per SM: the aim is to fit in as many threads in a SM as possible. For a SM has 1536 threads, a tile size of 16 we can fit up to 6 thread blocks in an SM (using all 1536 hardware thread contexts), while a tile size of 32 can only fit 1 thread block in an SM (using 1024 out of 1536 possible hardware thread contexts).