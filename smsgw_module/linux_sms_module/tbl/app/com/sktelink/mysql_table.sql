CREATE TABLE TELINK_SMS
(
CMP_MSG_ID VARCHAR(20) NOT NULL PRIMARY KEY,
CMP_USR_ID VARCHAR(5) NOT NULL,
ODR_FG CHAR(1) NOT NULL,
SMS_GB CHAR(1) NOT NULL default '1',
USED_CD CHAR(3) NOT NULL default '00',
MSG_GB CHAR(1) NOT NULL,
WRT_DTTM CHAR(14),
SND_DTTM CHAR(14) NOT NULL,
SND_PHN_ID VARCHAR(15),
RCV_PHN_ID VARCHAR(15) NOT NULL,
CALLBACK VARCHAR(15),
SND_MSG VARCHAR(200) NOT NULL,
CMP_SND_DTTM CHAR(14),
CMP_RCV_DTTM CHAR(14),
REG_SND_DTTM CHAR(14),
REG_RCV_DTTM CHAR(14),
EXPIRE_VAL INT NOT NULL default '0',
SMS_ST CHAR(1) NOT NULL,
RSLT_VAL INT default '99',
RSRVD_ID VARCHAR(20),
RERVD_WD VARCHAR(50),
INDEX TELINK_SMS_MSG_IDX1(SMS_ST),
INDEX TELINK_SMS_MSG_IDX2(SND_DTTM),
INDEX TELINK_SMS_MSG_IDX3(SMS_ST,SND_DTTM)
)