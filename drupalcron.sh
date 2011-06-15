#!/bin/bash

SITESROOT=/var/www/tvchat/sites

MYIPRANGE=127.0.0.1

cd $SITESROOT
for site in $(ls | egrep -v "all|default")
do
  if ping -c 1 $site |grep -q $MYIPRANGE
  then
    wget -O - -q http://$site/cron.php else
    "$site did not ping correctly"
  fi
done

