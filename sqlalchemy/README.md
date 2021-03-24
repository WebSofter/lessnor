# Install instructions

#### Create and activate virtual environment
`$ python -m virtualenv venv && source venv/bin/activate | source venv/Scripts/activate`

####  install SQLAlchemy
`$ pip install sqlalchemy`

####  install Postgres driver for python
`$ psycopg2`

### Docker Postgres interactive terminal
`$ docker exec -it sql-lessons_pgsql_1 psql -U admin -W db` \
`=# \l` - list of data bases \
`=# \c DBNAME` - connect to data base \
`=# \dt` - show list of tables \
`=# \d TABLENAME` - show table info \
`=# \d+ TABLENAME` - show extend table info \