from flask import Blueprint
user_bp = Blueprint('user_controller',__name__,url_prefix='/user')


@user_bp.route('/')
def index():
    return 'User controller is UP!'