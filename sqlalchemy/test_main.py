from sqlalchemy import create_engine  
from sqlalchemy import Column, String , Integer
from sqlalchemy.ext.declarative import declarative_base  
from sqlalchemy.orm import sessionmaker

db_string = "postgres://admin:secret@localhost:15432/db"

db = create_engine(db_string)  
Base = declarative_base()

class Film(Base):  
    __tablename__ = 'film'
    id = Column(Integer, primary_key=True)
    title = Column(String(50))
    director = Column(String(50))
    year = Column(String(50))

Session = sessionmaker(db)  
session = Session()

Base.metadata.create_all(db)

# Create 
doctor_strange = Film(title="Doctor Strange", director="Scott Derrickson", year="2016")  
session.add(doctor_strange)  
session.commit()

# Read
films = session.query(Film)  
for film in films:  
    print(film.title)

# Update
doctor_strange.title = "Some2016Film"  
session.commit()

# Delete
session.delete(doctor_strange)  
session.commit()  