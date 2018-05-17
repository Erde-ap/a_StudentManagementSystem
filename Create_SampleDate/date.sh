#!/bin/sh

echo -n "" > date.txt
Y=$1
M=$2
d=`date -d "-1 days + 1 month $(date -d '-1days + 1 month '$Y'/'$M''/1 +%Y%m01)" +%d`
for j in `seq -f %02g 1 $d`
do
	echo -n "Schedule.create(yyyy_mm_dd:'" >> date.txt
	echo -n $1 >> date.txt
	echo -n "," >> date.txt
	echo -n $2 >> date.txt
	echo -n "," >> date.txt
	echo -n $j >> date.txt
	echo -n "'," >> date.txt
	for i in `seq 1 5`
	do
		echo -n "period" >> date.txt
		echo -n $i >> date.txt
		echo -n ":" >> date.txt
		D=`date -d $1$2$j '+%w'`
		if [ $D -eq 0 -o $D -eq 6 ] ; then
			echo -n "false" >> date.txt
		else
			echo -n "true" >> date.txt
		fi
		echo -n "," >> date.txt
	done
	echo  ")" >> date.txt
done
