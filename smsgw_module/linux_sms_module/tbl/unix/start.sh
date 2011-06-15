#!/usr/bin/ksh
echo "Success : Read config file ..."

tmp=`grep "SOCKET_HOME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
	echo "Error: 'SOCKET_HOME' not defined"
	echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
	exit
fi
SOCKET_HOME=$tmp

tmp=`grep "JAVA_HOME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'JAVA_HOME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi
JAVA_HOME=$tmp

tmp=`grep "DB_KIND=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_KIND' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$tmp

tmp=`grep "DB_HOST=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_HOST' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_PORT=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_PORT' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_NAME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_NAME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_SID=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_SID' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_PASS=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_PASS' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_TBL_NAME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_TBL_NAME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_SELECT_ROW_NUM=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_SELECT_ROW_NUM' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi
if [ $tmp -gt 1000 ]
then
    echo "Error : DB_SELECT_ROW_NUM is bigger than 1000 : Input Value : "$temp
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "DB_INF_SERVER=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_INF_SERVER' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
fi  
DB_OPT=$DB_OPT";"$tmp

tmp=`grep "SOCKET_HOME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'SOCKET_HOME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
SOCKET_HOME=$tmp

echo "Success : Configured environment ..."

CLASS_PATH=".:"$SOCKET_HOME"/tbl/app"

#for i in `ls ../../app/lib`; do
#{
#	CLASS_PATH=$CLASS_PATH":"$SOCKET_HOME"/app/lib/"$i
#}
for i in `ls ../../app/lib`; do
	CLASS_PATH=$CLASS_PATH":"$SOCKET_HOME"/app/lib/"$i
done

echo $CLASS_PATH

if [ $JAVA_HOME = "default" ]
then
        java -Dsms -Xmx256M -Xms128M -classpath $CLASS_PATH com.sktelink.TableCreater $DB_OPT $SOCKET_HOME/tbl/table/
		echo ""
else
        $JAVA_HOME"/bin/"java -Dsms -Xmx256M -Xms128M -classpath $CLASS_PATH com.sktelink.TableCreater $DB_OPT $SOCKET_HOME/tbl/table/
		echo ""
fi
