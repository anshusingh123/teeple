#!/usr/bin/ksh
kill -9 `cat < ../../lib/unix/smsClient.pid`
echo "Success : Client Socket stop ..."