from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Images

images_ns=Namespace('images', description="A namespace for Images")

#model (serializer into JSON)
images_model=images_ns.model(
  "Images",
  {
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
   images=Images.query.filter_by()

   return images

  @images_ns.marshal_with(images_model)
  @images_ns.expect(images_model)
  @jwt_required()
  def post(self):
    data=request.get_json()

    new_recipe=Images(
      title=data.get('title'),
      description=data.get('description'),
    )

    new_recipe.save()
    return new_recipe, 201
   


@images_ns.route('/images/<int:id>')
class RecipeResource(Resource):
  @images_ns.marshal_with(images_model)
  @jwt_required()
  def get(self, id):
    recipe=Images.query.get_or_404(id)
    return recipe

  @images_ns.marshal_with(images_model)
  @jwt_required()
  def delete(self, id):
    recipe_to_delete=Images.query.get_or_404(id)
    recipe_to_delete.delete()
    return recipe_to_delete