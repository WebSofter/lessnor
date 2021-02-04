from sqlalchemy.ext.declarative import declarative_base

#Import our configuration functions
from models import Film
from config import get_engine, get_session

#Get instances for working with DB
base = declarative_base()
engine = get_engine()
session = get_session(engine, base)

#***********************Working with db********************
doctors = [Film(title="Doctor Junior", director="Mikle Johns", year="2018"), Film(title="Doctor Strange", director="Scott Derrickson", year="2016")]
session.add(doctors[0])
session.add(doctors[1])
# or session.add_all(doctors)
session.commit()