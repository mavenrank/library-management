from flask import Blueprint, request, jsonify
from models import Book, BookSchema
from extensions import db

book_routes = Blueprint('book_routes', __name__)
book_schema = BookSchema()
books_schema = BookSchema(many=True)

@book_routes.route('/', methods=['POST'])
def add_book():
    print(request)
    title = request.json['title']
    isbn = request.json['isbn']
    pub_year = request.json['publication_year']
    genre = request.json['genre']
    author_id = request.json['author_id']
    print(author_id)
    new_book = Book(title=title, isbn=isbn, publication_year=pub_year, genre=genre, author_id=author_id)
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
    title = request.json['title']
    isbn = request.json['isbn']
    pub_year = request.json['publication_yar']
    genre = request.json['genre']
    author_id = request.json['author_id']
    book.title = title
    book.isbn = isbn
    book.publication_yar = pub_year
    book.genre = genre
    book.author_id = author_id
    db.session.commit()
    return book_schema.jsonify(book)

@book_routes.route('/<id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get(id)
    db.session.delete(book)
    db.session.commit()
    return book_schema.jsonify(book)