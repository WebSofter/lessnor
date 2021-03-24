#Import our configuration functions
from models import Film
from config import get_session

#Get instances for working with DB
session = get_session()

#***********************Working with db********************

#Update spcify row v1
film = session.query(Film).filter(Film.id == 3).one()
session.delete(film)
session.commit()

#Update spcify row v2
films = Film.__table__.delete().where(Film.id.in_([2, 4, 5]))
session.execute(films)
session.commit()