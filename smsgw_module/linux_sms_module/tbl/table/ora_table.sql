CREATE TABLE _TABLE_NAME_
(
    CMP_MSG_ID      VARCHAR2(20)        NOT NULL,
    CMP_USR_ID      VARCHAR2(5)         DEFAULT '00000',
    ODR_FG          CHAR(1)             DEFAULT '1',
    SMS_GB          CHAR(1)             DEFAULT '1',
    USED_CD         CHAR(3)             DEFAULT '00',
    MSG_GB          CHAR(1)             NOT NULL,
    WRT_DTTM        CHAR(14),
    SND_DTTM        CHAR(14)            NOT NULL,
    SND_PHN_ID      VARCHAR2(15),
    RCV_PHN_ID      VARCHAR2(15)        NOT NULL,
    CALLBACK        VARCHAR2(15),
    SND_MSG         VARCHAR2(200)       NOT NULL,
    CMP_SND_DTTM    CHAR(14),
    CMP_RCV_DTTM    CHAR(14),
    REG_SND_DTTM    CHAR(14),
    REG_RCV_DTTM    CHAR(14),
    EXPIRE_VAL      NUMBER              DEFAULT 0,
    SMS_ST          CHAR(1)             DEFAULT 0,
    RSLT_VAL        NUMBER(4)           DEFAULT 99,
    RSRVD_ID        VARCHAR2(20),
    RSRVD_WD        VARCHAR2(50),
)
###########################################################
CREATE UNIQUE INDEX _TABLE_NAME_1_IDX ON _TABLE_NAME_
(CMP_MSG_ID)
###########################################################
CREATE INDEX _TABLE_NAME_SMS_ST_IDX ON _TABLE_NAME_
(SMS_ST)
###########################################################
CREATE INDEX _TABLE_NAME_SND_DTTM_IDX ON _TABLE_NAME_
(SND_DTTM)
###########################################################\
CREATE INDEX _TABLE_NAME_STSND_IDX ON _TABLE_NAME_
(SMS_ST, SND_DTTM)
###########################################################