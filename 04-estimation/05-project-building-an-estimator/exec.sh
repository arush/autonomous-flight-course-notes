#!/bin/bash
filename='../filenames.txt'
echo Start
mkdir website
cd website
while read p; do 
    mkdir "$p"
    touch "$p/$p.x"
done < $filename
