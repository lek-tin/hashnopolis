---
title: "Add Native Hadoop Libraries for macOS"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["apache", "macos", "hadoop", "library"]
categories: ["big-data"]
date: 2018-10-22T19:22:15-07:00
draft: true
archive: false
---
Apache Hadoop - add native libraries
If native libraries are not available the following message is displayed with every hadoop command: hadoop checknative

WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Clone hadoop source code

$ git clone https://github.com/apache/hadoop.git
$ cd hadoop
Checkout the version 2.7.1 source

$ git checkout branch-2.7.1
Install required dependencies - OSX: use brew or any other package manager

$ brew install cmake
$ brew install zlib
$ brew install protobuf
$ brew install snappy
Build project and native dependencies with maven

$ mvn package -Pdist,native -DskipTests -Dtar
Copy newly created libraries to the hadoop installation

$ mkdir -p $HADOOP_INSTALL/lib/native/osx
$ cp -r hadoop-dist/target/hadoop-2.7.1/lib/native/* $HADOOP_INSTALL/lib/native/osx
Add shell variables either to the ~/.bash_profile, or $HADOOP_INSTALL/etc/hadoop/hadoop-env.sh

export HADOOP_OPTS="$HADOOP_OPTS -Djava.library.path=$HADOOP_INSTALL/lib/native/osx”
Check if native libraries are available:

$ hadoop checknative
Warning
above rules do not cause bzip2 native libs to work in OSX.