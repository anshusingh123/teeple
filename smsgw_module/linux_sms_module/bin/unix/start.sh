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

tmp=`grep "SKT_HOST=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'SKT_HOST' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi
SK_OPT=$tmp

tmp=`grep "SKT_PORT=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'SKT_PORT' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi
SK_OPT=$SK_OPT";"$tmp

tmp=`grep "CMP_ID=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'CMP_ID' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
SK_OPT=$SK_OPT";"$tmp

tmp=`grep "AUTH_SEQ=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'AUTH_SEQ' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
SK_OPT=$SK_OPT";"$tmp

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

tmp=`grep "DB_INF_SERVER=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'DB_INF_SERVER' not defined"
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
ETC_OPT=$tmp

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
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "LOG_LEVEL=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'LOG_LEVEL' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "LOG_TYPE=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'LOG_TYPE' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "CONTENT=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'CONTENT' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "MODE=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'MODE' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "SYNC=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'SYNC' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "SLEEP_TIME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'SLEEP_TIME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "IGNORE_HOUR=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'IGNORE_HOUR' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "STOP_PROCESS_TIME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'STOP_PROCESS_TIME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "START_PROCESS_TIME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'START_PROCESS_TIME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "ALARM_NUMBER=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'ALARM_NUMBER' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "LOG_PERIOD=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'LOG_PERIOD' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp

tmp=`grep "LOG_FILE_PATH=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'LOG_FILE_PATH' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp 

tmp=`grep "CHARACTER_ENCODING=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'CHARACTER_ENCODING' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
ETC_OPT=$ETC_OPT";"$tmp 

tmp=`grep "SOCKET_HOME=" ../../conf/unix/config.cfg |grep -v "#" |awk '{split($1,s,"="); print s[2]}'`
if [ -z $tmp ]
then
    echo "Error: 'SOCKET_HOME' not defined"
    echo "Error : Checking for system-directory or configuration-values ('config.cfg')"
	echo " "
    exit
fi  
SOCKET_HOME=$tmp
ETC_OPT=$ETC_OPT";"$tmp

echo "Success : Configured environment ..."

CLASS_PATH=".:"$SOCKET_HOME"/app"

#for i in `ls ../../app/lib`
#{
#	CLASS_PATH=$CLASS_PATH":"$SOCKET_HOME"/app/lib/"$i
#}
for i in `ls ../../app/lib`; do
    CLASS_PATH=$CLASS_PATH":"$SOCKET_HOME"/app/lib/"$i
done


tmp1=`cat < ../../lib/unix/smsClient.pid`
tmp2=`ps -ef | grep $tmp1 | wc -l`
if [ $tmp2 -lt 2 ]
then    
    if [ $JAVA_HOME = "default" ]
        then
            java -Dsms -Xmx256M -Xms128M -classpath $CLASS_PATH com.sktelink.smsClient $SK_OPT $DB_OPT $ETC_OPT &
            echo "Success : Client Socket started now ..."
		    echo ""
        else
            $JAVA_HOME"/bin/"java -Dsms -Xmx256M -Xms128M -classpath $CLASS_PATH com.sktelink.smsClient $SK_OPT $DB_OPT $ETC_OPT &
            echo "Success : Client Socket started now ..."
		    echo ""
        fi
        echo $!> ../../lib/unix/smsClient.pid
else
   echo "Error: Duplicate Module"
fi
