#!/usr/bin/python

#
# reads and splits a NAND firmware image file into it's partitions
#
# kind of a workaround, since my fdisk doesn't recognize the NAND partitions
#

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
		#print new
		p.append( new )
	return p

def split(image, parts):
	partitions = extract_partitions(parts)

	imgbase = os.path.basename(image).replace(".img", "")
	dir = os.path.dirname(image)
	
	img = open(image, "rb")
	c = ord("a")
	hundred_megabyte = 100*(1024**2)
	for partition in partitions:
		print "extracting "+str(partition["size"])+" bytes from partition "+partition["name"],
		img.seek( partition["start"] )
		outname = os.path.join(dir, imgbase+"-nand"+chr(c)+"-"+partition["name"]+".img")
		c += 1
		out = open(outname, "wb")
		remaining = partition["size"]
		while remaining > 0:
			if remaining > hundred_megabyte:
				size = hundred_megabyte
			else:
				size = remaining
			out.write( img.read(size) )
			remaining -= size
			print ".",
		out.close()
		print str(os.path.getsize(outname))+" bytes written"
	img.close()

split(image, partitions)
