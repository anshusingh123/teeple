@echo off

echo.
call ../../lib/win/env.bat
   
if defined SETENV goto RUN_SOCKET
	echo Error : Checking for system-directory or configuration-values ('config.bat')
	echo.
	pause
	exit/b

:RUN_SOCKET
	echo Success : Read environment ...
	
	if %JAVA_HOME%==default	goto RUN_WITH_PATH
rem	echo Success : JAVA_HOME=%JAVA_HOME%
rem	echo Success : CLASS_PATH=%CLASS_PATH%
rem	echo Success : SK_OPT=%SK_OPT%
rem     echo Success : DB_OPT=%DB_OPT%
rem	echo Success : ETC_OPT=%ETC_OPT%
	echo Success : Client Socket started now ...
	echo.

rem	start "sktelink" %JAVA_HOME%\bin\java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.smsClient %SK_OPT% %DB_OPT% %ETC_OPT% &
	%JAVA_HOME%\bin\java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.smsClient %SK_OPT% %DB_OPT% %ETC_OPT% &
	exit/b
	
	:RUN_WITH_PATH
		echo Success : Client Socket started now ...
		echo.

rem		start "sktelink" java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.smsClient %SK_OPT% %DB_OPT% %ETC_OPT% &
		java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.smsClient %SK_OPT% %DB_OPT% %ETC_OPT% &
		exit/b



















