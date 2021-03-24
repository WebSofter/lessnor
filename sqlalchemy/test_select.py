#Import our configuration functions
from models import Film
from config import get_session

#Get instances for working with DB
session = get_session()

#***********************Working with db********************
print("Working with table: ", Film.__name__)
'''
films = session.query(Film).session.query(Film)
#Simple query 
for film in films:  
    print("for", film.title)

#Using query.filter_by
q = session.query(Film).filter_by(year = '2018')
film = q.first()
print("filter_by", film)

#Using SQL
q = session.execute("SELECT * FROM film")
film = q.first()
print("SQL", film)
'''
# User is the name of table that has a column name
s = Film.select().where(Film.c.id>2)
result = session.execute(s)

for row in result:
   print (row)