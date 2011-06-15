@echo off

call ../../conf/win/config.bat
echo Success : Read config file ...

if not defined SOCKET_HOME   goto SOCKET_HOME_UNDEFINED

if not defined JAVA_HOME   goto JAVA_HOME_UNDEFINED

if not defined SKT_HOST   goto SKT_HOST_UNDEFINED
set SK_OPT=%SKT_HOST%
if not defined SKT_PORT   goto SKT_PORT_UNDEFINED
set SK_OPT=%SK_OPT%;%SKT_PORT%
if not defined CMP_ID   goto CMP_ID_UNDEFINED
set SK_OPT=%SK_OPT%;%CMP_ID%
if not defined AUTH_SEQ   goto AUTH_SEQ_UNDEFINED
set SK_OPT=%SK_OPT%;%AUTH_SEQ%

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
if not defined DB_INF_SERVER   goto DB_INF_SERVER_UNDEFINED
set DB_OPT=%DB_OPT%;%DB_INF_SERVER%

if not defined DB_TBL_NAME   goto DB_TBL_NAME_UNDEFINED
set ETC_OPT=%DB_TBL_NAME%
if not defined DB_SELECT_ROW_NUM   goto DB_SELECT_ROW_NUM_UNDEFINED
if %DB_SELECT_ROW_NUM% gtr 1000   goto DB_SELECT_ROW_NUM_OVER
set ETC_OPT=%ETC_OPT%;%DB_SELECT_ROW_NUM%
if not defined LOG_LEVEL   goto LOG_LEVEL_UNDEFINED
set ETC_OPT=%ETC_OPT%;%LOG_LEVEL%
if not defined LOG_TYPE   goto LOG_TYPE_UNDEFINED
set ETC_OPT=%ETC_OPT%;%LOG_TYPE%
if not defined CONTENT   goto CONTENT_UNDEFINED
set ETC_OPT=%ETC_OPT%;%CONTENT%
if not defined MODE   goto MODE_UNDEFINED
set ETC_OPT=%ETC_OPT%;%MODE%
if not defined SYNC   goto SYNC_UNDEFINED
set ETC_OPT=%ETC_OPT%;%SYNC%
if not defined SLEEP_TIME   goto SLEEP_TIME_UNDEFINED
set ETC_OPT=%ETC_OPT%;%SLEEP_TIME%

if not defined IGNORE_HOUR   goto IGNORE_HOUR_UNDEFINED
set ETC_OPT=%ETC_OPT%;%IGNORE_HOUR%

if not defined STOP_PROCESS_TIME   goto STOP_PROCESS_TIME_UNDEFINED
set ETC_OPT=%ETC_OPT%;%STOP_PROCESS_TIME%
if not defined START_PROCESS_TIME   goto START_PROCESS_TIME_UNDEFINED
set ETC_OPT=%ETC_OPT%;%START_PROCESS_TIME%
if not defined ALARM_NUMBER   goto ALARM_NUMBER_UNDEFINED
set ETC_OPT=%ETC_OPT%;%ALARM_NUMBER%

if not defined LOG_PERIOD   goto :LOG_PERIOD_UNDEFINED
set ETC_OPT=%ETC_OPT%;%LOG_PERIOD%
if not defined LOG_FILE_PATH   goto LOG_FILE_PATH_UNDEFINED
set ETC_OPT=%ETC_OPT%;%LOG_FILE_PATH%
if not defined CHARACTER_ENCODING   goto CHARACTER_ENCODING_UNDEFINED
set ETC_OPT=%ETC_OPT%;%CHARACTER_ENCODING%

set ETC_OPT=%ETC_OPT%;%SOCKET_HOME%

set CLASS_PATH=%CLASS_PATH%;%SOCKET_HOME%\app
for %%j in (%SOCKET_HOME%\app\lib\*.*) do call %SOCKET_HOME%\lib\win\addclasspath.bat %%j

echo Success : Configured environment ...

set SETENV=1
exit/b



:SOCKET_HOME_UNDEFINED
	echo.
    echo Error : 'SOCKET_HOME' not defined
	exit/b

:JAVA_HOME_UNDEFINED
	echo.
    echo Error : 'JAVA_HOME' not defined
	exit/b

:SKT_HOST_UNDEFINED
	echo.
    echo Error : 'SKT_HOST' not defined
	exit/b

:SKT_PORT_UNDEFINED
	echo.
    echo Error : 'SKT_PORT' not defined
	exit/b

:CMP_ID_UNDEFINED
	echo.
    echo Error : 'CMP_ID' not defined
	exit/b

:AUTH_SEQ_UNDEFINED
	echo.
    echo Error : 'AUTH_SEQ' not defined
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

:DB_SELECT_ROW_NUM_OVER
	echo.
	echo Error : DB_SELECT_ROW_NUM is bigger than 1000 : Input Value : %DB_SELECT_ROW_NUM%
	exit/b

:DB_INF_SERVER_UNDEFINED
echo.
	echo Error : 'DB_INF_SERVER_UNDEFINED' not defined
	exit/b
	
:LOG_LEVEL_UNDEFINED
	echo.
    echo Error : 'LOG_LEVEL' not defined
	exit/b

:LOG_TYPE_UNDEFINED
	echo.
	echo Error : 'LOG_TYPE' not defined
	exit/b

:CONTENT_UNDEFINED
	echo.
	echo Error : 'CONTENT' not defined
	exit/b

:MODE_UNDEFINED
	echo.
	echo Error : 'MODE' not defined
	exit/b

:SYNC_UNDEFINED
	echo.
	echo Error : 'SYNC' not defined
	exit/b

:SLEEP_TIME_UNDEFINED
	echo.
	echo Error : 'SLEEP_TIME' not defined
	exit/b

:IGNORE_HOUR_UNDEFINED
	echo.
	echo Error : 'IGNORE_HOUR' not defined
	exit/b
	
:STOP_PROCESS_TIME_UNDEFINED
	echo.
	echo Error : 'STOP_PROCESS_TIME' not defined12
	exit/b

:START_PROCESS_TIME_UNDEFINED
	echo.
	echo Error : 'START_PROCESS_TIME' not defined
	exit/b

:ALARM_NUMBER_UNDEFINED
	echo.
    echo Error : 'ALARM_NUMBER' not defined
	exit/b

:LOG_PERIOD_UNDEFINED
	echo.
	echo Error : 'LOG_PERIOD' not defined12
	exit/b

:LOG_FILE_PATH_UNDEFINED
	echo.
	echo Error : 'LOG_FILE_PATH' not defined
	exit/b

:CHARACTER_ENCODING_UNDEFINED
	echo.
    echo Error : 'CHARACTER_ENCODING' not defined
	exit/b



































































