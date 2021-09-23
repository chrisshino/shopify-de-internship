from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Images
from gcs import upload

images_ns=Namespace('images', description="A namespace for Images")

#model (serializer into JSON)
images_model=images_ns.model(
  "Images",
  { 
    "image":fields.String(),
    "title":fields.String(),
    "description":fields.String(),
    "owner_id":fields.Integer()
  }
)

@images_ns.route('/images')
class ImagesResource(Resource):
  @images_ns.marshal_list_with(images_model)
  @jwt_required()
  def get(self):
   """Get's all images for the current user"""
   current_user=get_jwt_identity()
  #  then query on this username to our db
   images=Images.query.filter_by(owner_id=current_user).all()

   return images

  @images_ns.marshal_with(images_model)
  @jwt_required()
  def post(self):
    data=request.get_json()
    # run the gcs function and return the url here in a variable
    imageUrl=upload(data.get("image"))
    print(imageUrl)
    new_image=Images(
      # add in the gcs portion!
      image=imageUrl,
      title=data.get('title'),
      description=data.get('description'),
      owner_id=data.get('owner_id')
    )

    new_image.save()
    return new_image, 201
   