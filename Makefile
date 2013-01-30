
#
# type
#   make env
# to download the sources and prepare your system for kernel cross-compilation
#
# type
#   make kernel
# to compile kernel
#

all:
	make source compiler kernel
	exit

source:
	apt-get install git -y
	git clone git@github.com:linux-sunxi/linux-sunxi.git --depth 1
	cd linux-sunxi; git checkout sunxi-3.0

compiler:
	# append
	#    deb http://www.emdebian.org/debian/ testing main
	# to /etc/apt/source.list
	# apt-get update
	apt-get install emdebian-archive-keyring -y
	apt-get install gcc-4.4-arm-linux-gnueabi build-essential --force-yes
	apt-get install uboot-mkimage -y

kernel:
	cd linux-sunxi; \
	#make ARCH=arm sun4i_defconfig; \
	#make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- menuconfig \
	make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- -j3 uImage; \
	make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- -j3 INSTALL_MOD_PATH=output modules; \
	make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- -j3 INSTALL_MOD_PATH=output modules_install
	cp linux-sunxi/arch/arm/boot/uImage .

socinit:
	apt-get install libusb-1.0-0-dev -y
	cd sunxi-tools; make

