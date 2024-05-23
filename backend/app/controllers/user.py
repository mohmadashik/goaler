import os
from flask import Blueprint, send_from_directory
user_bp = Blueprint('user_controller',__name__,url_prefix='/user')


@user_bp.route('/')
def index():
    # build_dir = os.path.join(os.path.dirname(__file__),'..','..','frontend','build')
    # print(build_dir)
    # return send_from_directory(build_dir,'index.html')
    return 'User controller is UPPPPPP!'

@user_bp.route('/login')
def login():
    return 'USER LOGIN PAGE'