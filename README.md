iotns
=====

Name server for iot devices

add name
--------
    curl -X PUT 'iotns.herokuapp.com://addname?name=example.com&value=192.168.1.2'

get name
--------
    curl 'iotns.herokuapp.com://getname?name=example.com'
or point your browser at:
http://iotns.herokuapp.com

clear all names
---------------
    curl -X DELETE 'iotns.herokuapp.com://clearnames'

To register a name
------------------
    #! /bin/sh
    export ip=`ifconfig eth0 | sed -n 's/.*dr:\(.*\) Bc.*/\1/p'`
    export host=`hostname`
    curl -X PUT 'iotns.herokuapp.com://addname?name='$host'&value='$ip

Add this to cron
----------------
    @reboot iotns.sh
or run a sketch:
    void setup() {
        // put your setup code here, to run once:
        system("/etc/iotns.sh");
        }

    void loop() {
        // put your main code here, to run repeatedly:

    }
