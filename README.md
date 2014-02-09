iotns
=====

Name server for iot devices

To use:

add name
--------
  curl -X PUT 'iotns.herokuapp.com://addname?name=example.com&value=192.168.1.2'

get name
--------
  curl 'iotns.herokuapp.com://addname?name=example.com'

clear all names
---------------
  curl -X DELETE 'iotns.herokuapp.com://clearnames'

To register a name, run this at boot:
  #! /bin/sh
  export ip=`ifconfig eth0 | sed -n 's/.*dr:\(.*\) Bc.*/\1/p'`
  curl -X PUT 'iotns.herokuapp.com://addname?name=robertgalileo&value='$ip

Add this to cron:
@reboot iotns.sh
