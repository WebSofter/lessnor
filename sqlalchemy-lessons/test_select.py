from sqlalchemy.ext.declarative import declarative_base

#Import our configuration functions
from models import Film
from config import get_engine, get_session

#Get instances for working with DB
base = declarative_base()
engine = get_engine()
session = get_session(engine, base)

#***********************Working with db********************
print("Working with table: ", Film.__name__)

films = session.query(Film).session.query(Film)
#Simple query 
for film in films:  
    print("for", film.title)

#Using query.filter_by
q = session.query(Film).filter_by(year = '2018')
film = q.first()
print("filter_by", film)

#Using SQL
q = session.execute("SELECT * FROM films")
film = q.first()
print("SQL", film)
#print(session.new)
#print(session.dirty)