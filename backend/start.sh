#!/bin/bash

source ../venv/bin/activate

#Start the Flask app using Gunicorn 
gunicorn -w 4 -b 0.0.0.0:5000 wsgi:app --daemon &

echo "Backend Server Started"
echo "http://localhost:5000/"