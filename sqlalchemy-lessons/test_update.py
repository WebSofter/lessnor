#Import our configuration functions
from models import Film
from config import get_session

#Get instances for working with DB
session = get_session()

#***********************Working with db********************

#Update spcify row v1
film = session.query(Film).filter(Film.id == 3).one()
film.title = "Iron Man"
session.commit()

#Update spcify row v2
session.query(Film).filter(Film.id==3).update({'title':'Spider Man'}, synchronize_session=False)
session.commit()