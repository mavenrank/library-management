from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from models import Author, AuthorSchema
from extensions import db

author_routes = Blueprint('author_routes', __name__)
author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True)

@author_routes.route('/', methods=['POST'])
def add_author():
    name = request.json['name']
    bio = request.json.get('bio', '')
    dob = request.json['date_of_birth']
    new_author = Author(name=name, bio=bio, date_of_birth=dob)
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
    try:
        author = Author.query.get(id)
        if not author:
            return jsonify({"error": "Author not found"}), 404
        db.session.delete(author)
        db.session.commit()
        return author_schema.jsonify(author), 200
    except IntegrityError:
        db.session.rollback()  # Rollback the session to clean up the failed transaction
        return jsonify({"error": "Cannot delete author due to foreign key constraint"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500