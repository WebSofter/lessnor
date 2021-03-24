from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from datetime import datetime

Base = declarative_base()
class Film(Base):  
    __tablename__ = 'film'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(50))
    director = Column(String)
    year = Column(String)
    def __repr__(self):
        return "<Film(title='%s', director='%s', year='%s')>" % (self.title, self.director, self.year)

class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    email = Column(String(50), unique=True)
    passord = Column(String(100), nullable=True)
    date = Column(DateTime, default=datetime.utcnow)
    def __repr__(self):
        return f"<users {self.id}>"

class Profile(Base):
    __tablename__ = 'profile'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    age = Column(Integer)
    city = Column(String(100), unique=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    def __repr__(self):
        return f"<profiles {self.id}>"