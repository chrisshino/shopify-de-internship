from ext import db

"""
class Recipe:
  id:int primary key
  title:str
  description:str (text)
"""

class Recipe(db.Model):
  id=db.Column(db.Integer(), primary_key=True)
  title=db.Column(db.String(), nullable=False)
  description=db.Column(db.String(), nullable=False)

  def __repr__(self) -> str:
      return f"<Recipe {self.title}>"

  def save(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

"""
class User:
  id:integer
  username:string
  email:string
  password:string
"""

class User(db.Model):
  id=db.Column(db.Integer, primary_key=True)
  username=db.Column(db.String, nullable=False, unique=True)
  email=db.Column(db.String(80), nullable=False, unique=True)
  password=db.Column(db.Text(), nullable=False)

  def __repr__(self):
    return f"<User {self.username}>"

  def save(self):
    db.session.add(self)
    db.session.commit()