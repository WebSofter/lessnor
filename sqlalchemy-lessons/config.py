from sqlalchemy import create_engine  
from sqlalchemy.orm import sessionmaker
import sqlalchemy
print("SQLAlchemy version:", sqlalchemy.__version__)

def get_engine():
    return create_engine("postgres://admin:secret@localhost:15432/db")  

def get_session(engine, base):
    Session = sessionmaker(bind=engine) # or sessionmaker(engine)
    session = Session()
    base.metadata.create_all(engine)
    return session