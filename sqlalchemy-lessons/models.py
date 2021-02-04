from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String  

Base = declarative_base()
class Film(Base):  
    __tablename__ = 'films'

    title = Column(String, primary_key=True)
    director = Column(String)
    year = Column(String)
    def __repr__(self):
        return "<Film(title='%s', director='%s', year='%s')>" % (self.title, self.director, self.year)