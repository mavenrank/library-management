from datetime import date
from flask import Blueprint, request, jsonify
from models import db, Hiring

hiring_routes = Blueprint('hiring_routes', __name__)

@hiring_routes.route('/', methods=['GET'])
def get_hirings():
    hirings = Hiring.query.all()
    return jsonify([{
        'HireID': hiring.HireID,
        'UserID': hiring.UserID,
        'BookID': hiring.BookID,
        'HireDate': hiring.HireDate.isoformat(),
        'ReturnDate': hiring.ReturnDate.isoformat() if hiring.ReturnDate else None
    } for hiring in hirings])

@hiring_routes.route('/<int:hire_id>', methods=['GET'])
def get_hiring(hire_id):
    hiring = Hiring.query.get_or_404(hire_id)
    return jsonify({
        'HireID': hiring.HireID,
        'UserID': hiring.UserID,
        'BookID': hiring.BookID,
        'HireDate': hiring.HireDate.isoformat(),
        'ReturnDate': hiring.ReturnDate.isoformat() if hiring.ReturnDate else None
    })

@hiring_routes.route('/', methods=['POST'])
def create_hiring():
    data = request.get_json()
    new_hiring = Hiring(
        UserID=data['UserID'],
        BookID=data['BookID'],
        HireDate=data.get('HireDate', date.today()),
        ReturnDate=data.get('ReturnDate')
    )
    db.session.add(new_hiring)
    db.session.commit()
    return jsonify({'message': 'Hiring created successfully'}), 201

@hiring_routes.route('/<int:hire_id>', methods=['PUT'])
def update_hiring(hire_id):
    data = request.get_json()
    hiring = Hiring.query.get_or_404(hire_id)
    hiring.UserID = data.get('UserID', hiring.UserID)
    hiring.BookID = data.get('BookID', hiring.BookID)
    hiring.HireDate = data.get('HireDate', hiring.HireDate)
    hiring.ReturnDate = data.get('ReturnDate', hiring.ReturnDate)
    db.session.commit()
    return jsonify({'message': 'Hiring updated successfully'})

@hiring_routes.route('/<int:hire_id>', methods=['DELETE'])
def delete_hiring(hire_id):
    hiring = Hiring.query.get_or_404(hire_id)
    db.session.delete(hiring)
    db.session.commit()
    return jsonify({'message': 'Hiring deleted successfully'})