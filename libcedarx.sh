apt-get install -y tool gcc-4.4-arm-linux-gnueabi g++-4.4-arm-linux-gnueabi cpp-4.4-arm-linux-gnueabi
git clone https://github.com/willswang/libcedarx
cd libcedarx
./autogen.sh
./configure --host=arm-linux-gnueabi --prefix=/home/code/Mini-Xplus-Firmware/libcedarx
make
make install
