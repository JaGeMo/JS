#! /bin/bash

set -e

docker-compose stop $1
docker-compose rm -f -v $1
docker-compose up $1