from flask import request, jsonify, make_response
from flask_jwt_extended.view_decorators import jwt_required
from flask_restx import Resource, Namespace, fields
from models import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt_identity

auth_ns=Namespace('auth', description="A namespace for Authentication")

signup_model= auth_ns.model(
  "SignUp",
  {
    "username":fields.String(),
    "email":fields.String(),
    "password": fields.String()
  }
)

login_model=auth_ns.model(
  "Login",
  {
    "username":fields.String(),
    "password":fields.String()
  }
)

@auth_ns.route("/signup", methods=['POST'])
class SignUp(Resource):
  @auth_ns.expect(signup_model)
  def post(self):
    data=request.get_json()
    username=data.get('username')
    db_user=User.query.filter_by(username=username).first()

    if db_user:
      return jsonify({"message": f"User with username {username} already exists"})

    try:

      new_user=User(
        username=data.get("username"),
        email=data.get("email"),
        password=generate_password_hash(data.get("password"))
      )

      new_user.save()
      return make_response(jsonify({"message":"User created successfully!"}),201)
    
    except:
      return make_response(jsonify({"message": "Something went wrong?"}), 400)

@auth_ns.route("/login", methods=['POST'])
class Login(Resource):
  @auth_ns.expect(login_model)
  def post(self):
    data=request.get_json()

    username=data.get('username')
    password=data.get('password')

    db_user=User.query.filter_by(username=username).first()
    if db_user and check_password_hash(db_user.password, password):

      access_token = create_access_token(identity=db_user.id)
      refresh_token = create_refresh_token(identity=db_user.id)
      user_id = db_user.id
      username = db_user.username

      return jsonify({"access_token": access_token, "refresh_token": refresh_token, "user_id": user_id, "username": username})

    else:

      return make_response(jsonify({"message": "User doesn't seem to exist?"}), 400)


@auth_ns.route('/refresh', methods=['POST'])
class Refresh(Resource):
  @jwt_required(refresh=True)
  def post(self):
    current_user=get_jwt_identity()
    new_access_token=create_access_token(identity=current_user)

    return make_response(jsonify({"access_token":new_access_token}),200)
