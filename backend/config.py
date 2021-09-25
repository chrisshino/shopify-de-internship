from decouple import config

import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
  SECRET_KEY=config('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool)

class DevConfig(Config):
  SQLALCHEMY_DATABASE_URI=config('SQLALCHEMY_DATABASE_URI')
  DEBUG=True
  SQLALCHEMY_ECHO=True

class ProdConfig(Config):
  SQLALCHEMY_DATABASE_URI=config('SQLALCHEMY_DATABASE_URI')
  DEBUG=False
  SQLALCHEMY_ECHO=False


