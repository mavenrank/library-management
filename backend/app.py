from flask import Flask
from flask_cors import CORS
from config import Config
from routes.author_routes import author_routes
from routes.book_routes import book_routes
from routes.user_routes import user_routes
from routes.hiring_routes import hiring_routes
from extensions import db, ma

def create_app():
    app = Flask(__name__)
    app.url_map.strict_slashes = False
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
    #CORS(app, resources={r"/api/": {"origins": ""}})
    #app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # Update your DB URI as needed
    #app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config.from_object(Config)

    db.init_app(app)
    ma.init_app(app)

    app.register_blueprint(author_routes, url_prefix='/api/authors')
    app.register_blueprint(book_routes, url_prefix='/api/books')
    app.register_blueprint(user_routes, url_prefix='/api/users')
    app.register_blueprint(hiring_routes, url_prefix='/api/hirings')

    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(debug=True)