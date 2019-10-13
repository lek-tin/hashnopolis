---
title: "Super Useful Bash Commands"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["bash", "cli", "terminal"]
categories: ["linux"]
date: 2019-08-12T23:44:01-08:00
lastmod: 2019-09-16T00:49:01-08:00
draft: false
archive: false
---
1. List all services
```bash
sudo service --status-all
```

2. Create a nested directory if it doesn't exist already.
```bash
mkdir -p /nested/directory
```

3. To list detailed information about all items (visible and invisible) in the current directory (the -a option is to show all files, the -l option is to show details)
```bash
ls -al
```

4. To list the contents of your Documents folder and all sub folders (this may take a while if you have a large Documents folder)
```bash
ls -R ~/Documents
```

5. Find process which is listening to port 3000, and kill that process or process group
```bash
sudo lsof -i :3000
kill -9 <PID>
kill -9 -<PID>
```

6. [Dangerous] Recursively delete **EVERYTHING** files
```bash
rm -rf /tmp/*   // everything in '/tmp/' folder
rm -rf ./*      // everything in current folder
```

6. Delete curtain files
```bash
// Your exact case would be handled by brace expansion, like so:
rm -rf abc.log.2012-03-{14,27,28}
rm -rf abc.log.2012-03-14 abc.log.2012-03-27 abc.log.2012-03-28
```

7. Search
```bash
# search text or searches the given file for lines containing a match to the given strings or words.
docker logs | grep xxx
grep xxx
# Search for files that contains a specific text
find PATH -type f | xargs grep 'youtube.com'
# Recursively search for a text in files
grep -Ril "text-to-find" /
# i stands for ignore case (optional in your case).
# R stands for recursive.
# l stands for "show the file name, not the result itself".
# / stands for starting at the root of your machine.
``` 

8. Limit output
```bash
# Display only the first 10 lines or the last 20 lines
ll | head -n 10 | tail -n 20
```

8. Check memory usage
```bash
free
# total used free shared buffers cached
# Mem: 8027952 4377300 3650652 0 103648 1630364
# -/+ buffers/cache: 2643288 5384664
# Swap: 15624188 608948 15015240
```

9. Count total number of lines of code of all the php files in a directory recursively
```bash
find . -name '*.php' | xargs wc -l
```

10. List ports in use
```bash
netstat -a
```

11. Find a file by name
```bash
find . -name 'filename*'
```
12. Append content to a file.
```bash
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```
13. Change permission
```bash
# owner can read and write
chmod 600 file
# owner can read, write and execute
chmod 700 file
# all can read and write
chmod 666 file
# all can read, write and execute
chmod 777 file
```
14. Locate executable  
`which` command is very small and simple command to locate executables in the system. It allows user to pass several command names as arguments to get their paths in the system.
```bash
$ which [-option]
$ which ls gdb open grep
/bin/ls
/usr/bin/gdb
/bin/open
/bin/grep
```
15. Alias
```bash
alias ll='ls -al'
```
16. Upload files to the server
```bash
# Secure copy
scp FILE USER@SERVER_IP:.
```
17. Extract `bz2` files
```bash
# flag -k means keeping the source file
bzip2 -dk AREAWATER.csv.bz2
```
18. show CPU architecture-related information
```bash
lscpu
```
19. install a package
```bash
apt-get install <package-name>
```
20. list the installed packages
```bash
apt list --installed
```
21. List kernel attributes
```bash
sysctl -a
```
22. Passing parameters to `awk`
```bash
echo 'Hello world' | awk '{ print $0 }'
```
Output:
```
Hello world
```
```bash
echo 3 4 | awk '{ print $1 + $2 }'
```
Output:
```
7
```
23. Kill processes listening at `PORT_NUMBER`
```bash
lsof -i :<PORT_NUMBER> | awk -v i=2 -v j=2 'FNR==i {system("kill -9 " $2)}'
sudo kill -9 `sudo lsof -t -i:9001`
# If that doesn't work you could also use $() for command interpolation:
sudo kill -9 $(sudo lsof -t -i:9001)
```
24. `awk` Print the `j`th field of the `i`th line
```bash
awk -v i=5 -v j=3 'FNR == i {print $j}'
```
25. Embed sub scripts in main script. Sub script will be evaluated/executed before the main script.
```bash
# List current user directory
ls /Users/`echo $USER`
```
26. To check whether a program is running
```bash
ps -ef | grep tomcat
```

27. check user manual for a command. `man` command in Linux is used to display the user manual of any command that we can run on the terminal. It provides a detailed view of the command which includes