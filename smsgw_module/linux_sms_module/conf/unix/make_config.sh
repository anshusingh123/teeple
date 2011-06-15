#! /bin/sh

# variable
MSG_FILE="message.dat"
VAR_FILE="var_name.dat"
CNF_FILE="config.cfg"
TMP_CNF_FILE="config.tmp"

# function
rm_tmp_file()
{
	if [ -e $TMP_CNF_FILE ]
	then
		rm $TMP_CNF_FILE
	fi
}

print_head()
{
	echo "================================================================================"
	echo "                      << SK telink SMS Client Config Maker >>"
	echo "                                                                   (c) SK telink"
	echo "================================================================================"
	echo ""
}

print_tail()
{
	echo "================================================================================"
	echo "                          << Success make config file >>"
	echo "================================================================================"
}

read_value()
{
	VALUE=""

	echo "$1"

	while [ "$VALUE" = "" ]
	do
		echo ":\c"
		read VALUE
	done
}

get_variable()
{
	IDX2=1
	for VAR in `cat $VAR_FILE`
	do
		if [ $1 -eq $IDX2 ]
		then
			break
		fi

		IDX2=`expr $IDX2 + 1`
	done
}

save_ver()
{
	echo "################################################################################"
	echo "#                        SK telink SMS Client Config                           #"
	echo "#                                                                  Ver. 1.8.3  #"
	echo "################################################################################"
	echo ""
	echo ""
}

save_cnf()
{
	echo "$VAR=$VALUE"
}

trim()
{
ex $1 <<EOF
g/=/s/ //g
w
EOF
}

# main
clear
rm_tmp_file
print_head
save_ver >> $TMP_CNF_FILE

IFS="@"
IDX=1
for MSG in `cat $MSG_FILE`
do
	read_value $MSG
	get_variable $IDX
	save_cnf >> $TMP_CNF_FILE

	IDX=`expr $IDX + 1`
done

if [ -e $TMP_CNF_FILE ]
then
	mv $TMP_CNF_FILE $CNF_FILE
	trim $CNF_FILE	
	print_tail
fi

