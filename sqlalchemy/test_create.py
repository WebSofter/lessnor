#Import our configuration functions
from models import Film
from config import get_session

#Get instances for working with DB
session = get_session()

#***********************Working with db********************
films = [Film(title="Doctor Junior", director="Mikle Johns", year="2018"), Film(title="Doctor Strange", director="Scott Derrickson", year="2016")]
session.add(films[0])
session.add(films[1])
# or session.add_all(films)
session.commit()