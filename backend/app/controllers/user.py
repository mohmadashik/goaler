import os
from flask import Blueprint, jsonify,render_template,url_for,flash,redirect,request
from flask_login import login_user,current_user,logout_user, login_required

from ..db import DBManager
from ..models.user import User

user_bp = Blueprint('user_controller',__name__,url_prefix='/user')

db = DBManager.get_db()

@user_bp.route('/home')
@login_required
def home():
    return jsonify({'status':'Welcome to User Home Page'}), 200


@user_bp.route("/register", methods=['GET', 'POST'])
def register():
    from .. import bcrypt 
    if current_user.is_authenticated:
        return jsonify({'message':'Already Logged in'}), 200
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message':'User registered successfully'}), 200

@user_bp.route("/login", methods=['GET', 'POST'])
def login():
    from .. import bcrypt
    if current_user.is_authenticated:
        return jsonify({'message':'Already logged in'}), 200
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user, remember=True)
            next_page = request.args.get('next')
            return jsonify({'message':'Login successful'}),200
        else:
            return jsonify({'message':'Login unsuccessful. Check email and password'}), 401

@user_bp.route("/logout")
def logout():
    logout_user()
    return jsonify({'message':'Logged out successfully'}), 200


@user_bp.route("/")
def ping():
    return {"status":"User Controller is UP"}, 200