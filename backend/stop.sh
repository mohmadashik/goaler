#!/bin/bash

#Find the Gunicorn process ID
PID=$(ps aux | grep 'gunicorn' | grep 'wsgi:app'| awk '{print $2}')

if [-n "$PID"]; then
    kill -9 $PID
    echo "Server stopped."
else
    echo "Server is not running."
fi 