#!/bin/bash

source ../venv/bin/activate
rm -rf migrations   
mysql -u amohmad -p'welcome' -D goaler -e 'DROP TABLE alembic_version'

export FLASK_APP=app/
flask db init
flask db migrate
flask db upgrade