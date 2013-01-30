#!/usr/bin/python

import os

image = "/home/user/Downloads/Mini_Xplus_Android_4.0-1.img"

# http://www.matthiasbock.net/wiki/index.php/Mini_Xplus_bootlog
partitions = """bootloader  : 1000000       1000000                                                                                                         
env         : 2000000       1000000     
boot        : 3000000       2000000     
system      : 5000000       14000000    
data        : 19000000      40000000    
misc        : 59000000      1000000     
recovery    : 5a000000      2000000     
cache       : 5c000000      8000000     
private     : 64000000      1000000     
sysrecovery : 65000000      200000      
UDISK       : 65200000      88600000"""

def extract_partitions(s):
	# partitions
	p = []
	
	# remove whitespace
	s = s.replace(":", " ")
	while "   " in s:
		s = s.replace("  ", " ")

	# line by line ...
	for line in s.split("\n"):
		t = line.split(" ")
		new = 	{
					"name": t[0],
					"start": int(t[1], 16),
					"size": int(t[2], 16),
				}
		print new
		p.append( new )
	return p

def split(image, parts):
	partitions = extract_partitions(parts)
	

split(image, partitions)

print os.path.dirname(image)