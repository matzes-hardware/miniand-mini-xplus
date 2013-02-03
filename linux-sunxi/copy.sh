#!/bin/bash

echo "kernel ..."
umount /dev/sdb1
mount /dev/sdb1 /mnt
cp arch/arm/boot/uImage /mnt -v
sleep 2
umount /mnt

echo "modules ..."
umount /dev/sdb2
mount /dev/sdb2 /mnt
rm /mnt/lib/modules/* -fR
cp output/lib/modules/* /mnt/lib/modules/ -vR
sleep 2
umount /mnt

