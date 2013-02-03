apt-get install -y tool gcc-4.4-arm-linux-gnueabi g++-4.4-arm-linux-gnueabi cpp-4.4-arm-linux-gnueabi
git clone https://github.com/willswang/libcedarx
cd libcedarx
wget https://github.com/linux-sunxi/cedarx-libs/blob/master/libcedarv/linux-armel/libvecore/libvecore.so?raw=true -O libvecore.so
./autogen.sh
./configure --host=arm-linux-gnueabi --prefix=/usr
make
make install
