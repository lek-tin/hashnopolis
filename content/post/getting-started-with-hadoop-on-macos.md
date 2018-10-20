---
title: "Getting Started With Hadoop on MacOS"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["hadoop", "apache", "macos", "mapreduce", "distributed-file-system"]
categories: ["big-data"]
date: 2018-10-20T15:15:16-07:00
draft: false
archive: false
---
Install Java (my version is 11.0.1)
```
# Setting PATH for Java
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-11.0.1.jdk/Contents/Home"
```
Install `hadoop` by unzip the `tar.gz` file and move it the folder where you want `hadoop` to be installed.
```
tar -xvzf hadoop-2.9.0.tar.gz
cp hadoop-2.9.0 ../INSTALLATION_PATH/
```
Add paths to the `~/.bash_profile` file
```
# Setting PATHs for hadoop
export HADOOP_HOME="/INSTALLATION_PATH/hadoop-2.9.0"
export HADOOP_PREFIX="/INSTALLATION_PATH/hadoop-2.9.0"
export PATH="$PATH:$HADOOP_PREFIX/bin:$HADOOP_PREFIX/sbin"
export HADOOP_CONF_DIR="$HADOOP_PREFIX/etc/hadoop"
```
Then run `source` to evaluate it
```
source ~/.bash_profile
```
Test `hadoop` works
```
$ hadoop jar $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-2.9.0.jar wordcount $HADOOP_HOME/README.txt $HADOOP_HOME/README.count.txt
```