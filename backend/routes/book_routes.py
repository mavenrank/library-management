from flask import Blueprint, request, jsonify
from models import Book, BookSchema
from extensions import db

book_routes = Blueprint('book_routes', __name__)
book_schema = BookSchema()
books_schema = BookSchema(many=True)

@book_routes.route('/', methods=['POST'])
def add_book():
    title = request.json['Title']
    isbn = request.json['ISBN']
    pub_year = request.json['PublicationYear']
    genre = request.json['Genre']
    author_id = request.json['AuthorID']
    new_book = Book(Title=title, ISBN=isbn, PublicationYear=pub_year, Genre=genre, AuthorID=author_id)
    db.session.add(new_book)
    db.session.commit()
    return book_schema.jsonify(new_book)

@book_routes.route('/', methods=['GET'])
def get_books():
    books = Book.query.all()
    return books_schema.jsonify(books)

@book_routes.route('/<id>', methods=['GET'])
def get_book(id):
    book = Book.query.get(id)
    return book_schema.jsonify(book)

@book_routes.route('/<id>', methods=['PUT'])
def update_book(id):
    book = Book.query.get(id)
    title = request.json['Title']
    isbn = request.json['ISBN']
    pub_year = request.json['PublicationYear']
    genre = request.json['Genre']
    author_id = request.json['AuthorID']
    book.Title = title
    book.ISBN = isbn
    book.PublicationYear = pub_year
    book.Genre = genre
    book.AuthorID = author_id
    db.session.commit()
    return book_schema.jsonify(book)

@book_routes.route('/<id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get(id)
    db.session.delete(book)
    db.session.commit()
    return book_schema.jsonify(book)