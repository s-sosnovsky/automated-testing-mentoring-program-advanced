#!/bin/sh

set -e

host="selenium-hub"
port="4444"
cmd="$@"

>&2 echo "!!!!!!!! Check selenium-hub for availability !!!!!!!!"

until curl http://"$host":"$port"; do
  >&2 echo "selenium-hub is unavailable - sleeping"
  sleep 1
done

>&2 echo "selenium-hub is up - executing command"

exec $cmd
