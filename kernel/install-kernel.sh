#!/bin/bash

boot_uuid=ca8dc836-f124-4e63-891d-6af3e9c3cd82
boot_mountpoint=/media/minix/boot

root_uuid=2ab2a4d0-3e39-4e76-bb0a-552c2a33775a
root_mountpoint=/media/minix/root

kernel_dir=kernel_union

mkdir -p $boot_mountpoint
umount -fl $boot_mountpoint
mount /dev/disk/by-uuid/$boot_uuid $boot_mountpoint
cp -av kernel_union/arch/arm/boot/uImage $boot_mountpoint
cp -av kernel_union/arch/arm/boot/dts/sun4i-a10-mini-xplus.dtb $boot_mountpoint
umount $boot_mountpoint


mkdir -p $root_mountpoint
umount -fl $root_mountpoint
mount /dev/disk/by-uuid/$root_uuid $root_mountpoint
here=$(pwd)
cd $kernel_dir
make ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- LOADADDR=0x42000000 CONFIG_DEBUG_SECTION_MISMATCH=y INSTALL_MOD_PATH=$root_mountpoint modules_install
#...rsync ...
#/lib/modules/<kernel release>
#/usr/include/
cd "$here"
umount $root_mountpoint

