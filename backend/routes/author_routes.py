from flask import Blueprint, request, jsonify
from models import Author, AuthorSchema
from extensions import db

author_routes = Blueprint('author_routes', __name__)
author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True)

@author_routes.route('/', methods=['POST'])
def add_author():
    name = request.json['Name']
    bio = request.json.get('Bio', '')
    dob = request.json['DateOfBirth']
    new_author = Author(Name=name, Bio=bio, DateOfBirth=dob)
    db.session.add(new_author)
    db.session.commit()
    return author_schema.jsonify(new_author)

@author_routes.route('/', methods=['GET'])
def get_authors():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)

@author_routes.route('/<id>', methods=['GET'])
def get_author(id):
    author = Author.query.get(id)
    return author_schema.jsonify(author)

@author_routes.route('/<id>', methods=['PUT'])
def update_author(id):
    author = Author.query.get(id)
    name = request.json['Name']
    bio = request.json.get('Bio', '')
    dob = request.json['DateOfBirth']
    author.Name = name
    author.Bio = bio
    author.DateOfBirth = dob
    db.session.commit()
    return author_schema.jsonify(author)

@author_routes.route('/<id>', methods=['DELETE'])
def delete_author(id):
    author = Author.query.get(id)
    db.session.delete(author)
    db.session.commit()
    return author_schema.jsonify(author)