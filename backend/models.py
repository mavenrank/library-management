from datetime import date
from extensions import db, ma

class Author(db.Model):
    __tablename__ = 'authors'
    author_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    bio = db.Column(db.Text)
    date_of_birth = db.Column(db.Date)

class AuthorSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Author
        load_instance = True

class Book(db.Model):
    __tablename__ = 'books'
    book_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    isbn = db.Column(db.String(20))
    publication_year = db.Column(db.Integer)
    genre = db.Column(db.String(50))
    author_id = db.Column(db.Integer, db.ForeignKey('authors.author_id'))

class BookSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True

class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    membership_date = db.Column(db.Date)

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

class Hiring(db.Model):
    __tablename__ = 'hiring'
    hire_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    book_id = db.Column(db.Integer, db.ForeignKey('books.book_id'))
    hire_date = db.Column(db.Date, nullable=False, default=date.today)
    return_date = db.Column(db.Date)

    user = db.relationship('User', backref=db.backref('hiring', lazy=True))
    book = db.relationship('Book', backref=db.backref('hiring', lazy=True))

class HiringSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Hiring
        load_instance = True

class Library(db.Model):
    __tablename__ = 'library'
    library_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    location = db.Column(db.String(100))

class LibrarySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Library
        load_instance = True