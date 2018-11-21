---
title: "Install Java on Linux"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["java"]
categories: ["linux"]
date: 2018-11-20T12:12:47-08:00
draft: false
archive: false
---
## Install manually

### Step 1:
Download the source package from the oracle repository.
If your computer is 64-bit, download the `x64` version; if it is 32-bit, download the `x86` version.


### Step 2:
Extract from the compressed file and move the package folder to `/usr/java`. rememeber to run these commands as `sudo` is not the `root` user.
```bash
mv downloads-folder/jdk-<version>-linux-xxx.tar.gz /usr/java
tar -xvzf jdk-<version>-linux-xxx.tar.gz
rm jdk-<version>-linux-xxx.tar.gz
```

### Step 3:
Add the `java` path to the `~/.bashrc` file
```bash
vi ~/.bashrc
// Add the path to the java executable. Append following line to the bottom of the file
export PATH=$PATH:/usr/java/jdk<version>/bin
```

### Step 4:
Reload bash with the changed settings like below
```bash
source ~/.bashrc  // Long version
. ~/.bashrc       // Short version
```
Alternatively, we can also open a new terminal window on which the changes we made will be applied.