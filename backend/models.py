from ext import db

"""
class User:
  id:integer
  username:string
  email:string
  password:string
"""

class User(db.Model):
  id=db.Column(db.Integer, primary_key=True)
  username=db.Column(db.String(25), nullable=False, unique=True)
  email=db.Column(db.String(80), nullable=False, unique=False)
  password=db.Column(db.Text(), nullable=False)
  images = db.relationship('Images', backref="owner")

  def __repr__(self):
    return f"<User {self.username}>"

  def save(self):
    db.session.add(self) 
    db.session.commit()

"""
class Images:
  id:int primary key
  title:str
  description:str(text)
"""

class Images(db.Model):
  id=db.Column(db.Integer(), primary_key=True)
  image=db.Column(db.String(), nullable=False)
  title=db.Column(db.String(), nullable=False)
  description=db.Column(db.String(), nullable=False)
  owner_id = db.Column(db.Integer(), db.ForeignKey('user.id'))

  def __repr__(self) -> str:
      return f"<Image {self.title}>"

  def save(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

