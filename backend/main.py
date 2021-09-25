from flask import Flask
from flask_restx import Api
from models import Images, User
from ext import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from config import ProdConfig
from images import images_ns
from auth import auth_ns
from flask_cors import CORS

def create_app():

  app = Flask(__name__)
  app.config.from_object(ProdConfig)
  CORS(app)
  db.init_app(app)

  migrate=Migrate(app, db)
  JWTManager(app)

  api=Api(app, doc='/docs')
  api.add_namespace(images_ns)
  api.add_namespace(auth_ns)

  @app.shell_context_processor
  def make_shell_context():
    return {
      "db":db,
      "Images":Images,
      "User": User
    }

  return app