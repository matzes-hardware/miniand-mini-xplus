#!/bin/bash

echo "kernel ..."
scp arch/arm/boot/uImage root@miniand:/boot/

echo "modules ..."
ssh root@miniand "cd /lib/modules; rm 3.0.52.bak -Rf; mv 3.0.52 3.0.52.bak"
scp -r output/lib/modules/3.0.52 root@miniand:/lib/modules/
