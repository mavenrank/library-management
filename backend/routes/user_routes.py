from flask import Blueprint, request, jsonify
from models import User, UserSchema
from extensions import db

user_routes = Blueprint('user_routes', __name__)
user_schema = UserSchema()
users_schema = UserSchema(many=True)

@user_routes.route('/', methods=['POST'])
def add_user():
    name = request.json['Name']
    email = request.json['Email']
    membership_date = request.json['MembershipDate']
    new_user = User(Name=name, Email=email, MembershipDate=membership_date)
    db.session.add(new_user)
    db.session.commit()
    return user_schema.jsonify(new_user)

@user_routes.route('/', methods=['GET'])
def get_users():
    users = User.query.all()
    return users_schema.jsonify(users)

@user_routes.route('/<id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)

@user_routes.route('/<id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    name = request.json['Name']
    email = request.json['Email']
    membership_date = request.json['MembershipDate']
    user.Name = name
    user.Email = email
    user.MembershipDate = membership_date
    db.session.commit()
    return user_schema.jsonify(user)

@user_routes.route('/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)