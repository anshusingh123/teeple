@echo off

echo.
call ../../conf/win/config.bat
echo Success : Read config file ...

if not defined SOCKET_HOME   goto SOCKET_HOME_UNDEFINED
if not defined JAVA_HOME   goto JAVA_HOME_UNDEFINED

if not defined DB_KIND   goto DB_KIND_UNDEFINED
set DB_OPT=%DB_KIND%
if not defined DB_HOST   goto DB_HOST_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_HOST%
if not defined DB_PORT   goto DB_PORT_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_PORT%
if not defined DB_NAME   goto DB_NAME_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_NAME%
if not defined DB_SID   goto DB_SID_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_SID%
if not defined DB_PASS   goto DB_PASS_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_PASS%
if not defined DB_TBL_NAME   goto DB_TBL_NAME_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_TBL_NAME%
if not defined DB_SELECT_ROW_NUM   goto DB_SELECT_ROW_NUM_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_SELECT_ROW_NUM%
if not defined DB_INF_SERVER   goto DB_INF_SERVER_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_INF_SERVER%

set CLASS_PATH=%CLASS_PATH%;%SOCKET_HOME%\tbl\app
for %%j in (%SOCKET_HOME%\app\lib\*.*) do call %SOCKET_HOME%\lib\win\addclasspath.bat %%j

echo Success : Configured environment ...
set SETENV=1
   
if defined SETENV goto RUN_TABLE_CREATER
	echo Error : Checking for system-directory or configuration-values ('config.bat')
	echo.
	pause
	exit/b

:RUN_TABLE_CREATER
	echo Success : Read environment ...
	
	if %JAVA_HOME%==default goto RUN_WITH_PATH
	
	echo Success : JAVA_HOME=%JAVA_HOME%
	echo Success : CLASS_PATH=%CLASS_PATH%
	echo Success : DB_OPT=%DB_OPT%
	echo Success : TableCreater started now ...
	echo.

rem	start "sktelink" %JAVA_HOME%\bin\java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.TableCreater %DB_OPT% %SOCKET_HOME%\tbl\table\
	%JAVA_HOME%\bin\java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.TableCreater %DB_OPT% %SOCKET_HOME%\tbl\table\
	exit/b
	
:RUN_WITH_PATH
		echo Success : TableCreater started now / Java Home = Default...

rem		start "sktelink" java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.TableCreater %DB_OPT% %SOCKET_HOME%\tbl\table\
		java -Dsms -Xmx256M -Xms128M -classpath %CLASS_PATH% com.sktelink.TableCreater %DB_OPT% %SOCKET_HOME%\tbl\table\
		exit/b



:SOCKET_HOME_UNDEFINED
	echo.
    echo Error : 'SOCKET_HOME' not defined
	exit/b

:JAVA_HOME_UNDEFINED
	echo.
    echo Error : 'JAVA_HOME' not defined
	exit/b

:DB_KIND_UNDEFINED
	echo.
    echo Error : 'DB_KIND' not defined
	exit/b

:DB_HOST_UNDEFINED
	echo.
    echo Error : 'DB_HOST' not defined
	exit/b

:DB_PORT_UNDEFINED
	echo.
    echo Error : 'DB_PORT' not defined
	exit/b

:DB_NAME_UNDEFINED
	echo.
    echo Error : 'DB_NAME' not defined
	exit/b

:DB_SID_UNDEFINED
	echo.
    echo Error : 'DB_SID' not defined
	exit/b

:DB_PASS_UNDEFINED
	echo.
    echo Error : 'DB_PASS' not defined
	exit/b

:DB_TBL_NAME_UNDEFINED
	echo.
    echo Error : 'DB_TBL_NAME' not defined
	exit/b

:DB_SELECT_ROW_NUM_UNDEFINED
	echo.
	echo Error : 'DB_SELECT_ROW_NUM' not defined
	exit/b

:DB_INF_SERVER_UNDEFINED
	echo.
	echo Error : 'DB_INF_SERVER' not defined
	exit/b















