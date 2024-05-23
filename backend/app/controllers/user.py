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
    return jsonify({'status':'Welcome to User Home Page'})


@user_bp.route("/register", methods=['GET', 'POST'])
def register():
    from .. import bcrypt 
    if current_user.is_authenticated:
        return redirect(url_for('user_controller.home'))
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(username=username, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('user_controller.login'))
    return render_template('register.html')

@user_bp.route("/login", methods=['GET', 'POST'])
def login():
    from .. import bcrypt
    if current_user.is_authenticated:
        return redirect(url_for('/home'))
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user, remember=True)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('user_controller.home'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html')

@user_bp.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('user_controller.home'))


@user_bp.route("/ping")
def ping():
    return {"status":"User Controller is UP"}

