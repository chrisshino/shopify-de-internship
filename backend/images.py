from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from backend.models import Recipe

images_ns=Namespace('images', description="A namespace for Images")

#model (serializer into JSON)
recipe_model=images_ns.model(
  "Recipe",
  {
    "id":fields.Integer(),
    "title":fields.String(),
    "description":fields.String()
  }
)

@images_ns.route('/recipes')
class RecipesResource(Resource):
  @images_ns.marshal_list_with(recipe_model)
  def get(self):
   """Get's all images"""
   recipes=Recipe.query.all()

   return recipes

  @images_ns.marshal_with(recipe_model)
  @images_ns.expect(recipe_model)
  def post(self):
    data=request.get_json()

    new_recipe=Recipe(
      title=data.get('title'),
      description=data.get('description'),
    )

    new_recipe.save()
    return new_recipe, 201
   


@images_ns.route('/recipe/<int:id>')
class RecipeResource(Resource):
  @images_ns.marshal_with(recipe_model)
  @jwt_required()
  def get(self, id):
    recipe=Recipe.query.get_or_404(id)
    return recipe

  @images_ns.marshal_with(recipe_model)
  @jwt_required()
  def delete(self, id):
    recipe_to_delete=Recipe.query.get_or_404(id)
    recipe_to_delete.delete()
    return recipe_to_delete