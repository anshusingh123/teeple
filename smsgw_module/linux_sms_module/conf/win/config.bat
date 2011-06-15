@echo off

Ver 1.8.6
 
rem ***********************************************************************
rem *********************************************************************** 
rem ***                                                                 *** 
rem ***  You must configure follow the frow for your system enviroment  *** 
rem ***                                                                 *** 
rem *********************************************************************** 
rem *********************************************************************** 
 
rem --------------------------------------------------------------- 
rem |  You can change to configure information of root directory  | 
rem --------------------------------------------------------------- 
set SOCKET_HOME=
set JAVA_HOME=
 
 
rem ------------------------------------------------------------- 
rem |  You can change to configure information of socket        | 
rem |  For connet this Client-socket to SKTelink Server-socket  | 
rem ------------------------------------------------------------- 
set SKT_HOST=
set SKT_PORT=
set CMP_ID=
set AUTH_SEQ=
 
 
rem --------------------------------------------------------- 
rem |  You can change to configure information of database  | 
rem |  DB_KIND values :                                     | 
rem |            1 : oracle                                 | 
rem |            2 : mysql                                  | 
rem |            3 : ms-sql                                 | 
rem |            4 : db2                                    | 
rem |            5 : sybase                                 | 
rem |            6 : sybase( Same or over the ver 12.5.3 )  | 
rem |            7 : informix                               | 
rem |            8 : ms-sql ( Same or over the ver 2005 )   |                                        | 
rem |  Case by NON-USED-DBPASS : DB_PASS=DB_PASS            | 
rem |                                                       | 
rem |  DB_SELECT_ROW_NUM values : 1 ~ 1000                  | 
rem ---------------------------------------------------------v 
set DB_KIND=
set DB_HOST=
set DB_PORT=
set DB_NAME=
set DB_SID=
set DB_PASS=
set DB_TBL_NAME=
set DB_SELECT_ROW_NUM=30
set DB_INF_SERVER=INFSERVER
 
rem ------------------------------------------------------------------------- 
rem |  You can change to configure level information of log                 | 
rem |  LOG_LEVEL value :                                                    | 
rem |                0 : lowst level   : only information by connection     | 
rem |                1 : low level     : (0) with story flow                | 
rem |                2 : default level : (0,1) with socket stream packet    | 
rem |                3 : high level    : (0,1,2) with socket value of data  | 
rem |                                                                       | 
rem |  LOG_TYPE value :                                                     | 
rem |               0 : Wrrite log at month after month                     | 
rem |               1 : Wrrite log at day after day                         | 
rem |               2 : Wrrite log at hour after hour                       | 
rem ------------------------------------------------------------------------- 
set LOG_LEVEL=2
set LOG_TYPE=1
set LOG_PERIOD=30
set LOG_FILE_PATH=
 
 
rem ------------------------------------------------------------------- 
rem |  You can change to configure a little-Content or many-Contents  | 
rem |                                                                 | 
rem |  CONTENT value :                                                | 
rem |           0 : Method by a little-Contents                       | 
rem |           1 : Method by Many-Contents                           | 
rem ------------------------------------------------------------------- 
set CONTENT=1
 
rem ------------------------------------------------------------------- 
rem | You can change to configure Single-mode or Dual-mode rx/tx      | 
rem |                                                                  
rem | MODE value :                                                    | 
rem |          0 : Method by Single-mode or Dual-mode-tx (Submit)     | 
rem |          1 : Method by Dual-mode-rx (Report)                    | 
rem ------------------------------------------------------------------- 
set MODE=0
 
rem ------------------------------------------------------------- 
rem |  You can change to configure Synchronous or Asynchronous  | 
rem |                                                           | 
rem |  SYNC value :                                             | 
rem |           0 : Method by Synchronous                       | 
rem |           1 : Method by Asynchronous                      | 
rem ------------------------------------------------------------- 
set SYNC=1
 
 
rem ------------------------------------------------------------------------------------------- 
rem |  You can change to configure sleep time for retry connection to SKTelink Socket Server  | 
rem |                                                                                         | 
rem |  unit option : second ( ex: 1 minute => 60 & 1 hour => 360)                             | 
rem ------------------------------------------------------------------------------------------- 
set SLEEP_TIME=30
 
 
rem ----------------------------------------------------------------- 
rem |  You can change to configure ignorable time for NON-SMS       | 
rem |                                                               |
rem |  unit option : hh24 ( ex: 1 hour => 1 ,  2 day => 48)         | 
rem |  default : non-using : 0                                      | 
rem ----------------------------------------------------------------- 
set IGNORE_HOUR=0
 
 
rem ---------------------------------------------------------------------- 
rem |  You can change to configure stop processing time for NON-SMS      | 
rem |                                                                    | 
rem |  unit option :  hh24mi ( ex: 14:11 => 1411 , 01:00 => 0100)        | 
rem |  default : non-using : XXX                                         |
rem ---------------------------------------------------------------------- 
set STOP_PROCESS_TIME=XXX
set START_PROCESS_TIME=XXX
 
rem -------------------------------------------------------------------------------- 
rem |  You can change to configure information of alarm phone-number               | 
rem |                                                                              | 
rem |  ## Only send message than DataBase connection error or query or restart ##  | 
rem |                                                                              | 
rem |  add option 1 : Don't maked '/' behind tail                                  | 
rem |  add option 2 : Don't maked '-' between number                               | 
rem |  add option 3 : ALARM_NUMBER=011222333/01622223333 ...                       | 
rem |                                                                              | 
rem |            ex : ALARM_NUMBER=011222333/01622223333  (O)                      | 
rem |                 ALARM_NUMBER=011222333/01622223333/ (X)                      | 
rem |                 ALARM_NUMBER=XXX (case by non-manager)                       | 
rem -------------------------------------------------------------------------------- 
set ALARM_NUMBER=XXX
 
rem ---------------------------------------------------------------------- 
rem |  You can change to configure characterEncoding                     | 
rem |                                                                    | 
rem |  ex) Korean characterEncoding=euc-kr                               | 
rem ---------------------------------------------------------------------- 
set CHARACTER_ENCODING=euc-kr
 
 
