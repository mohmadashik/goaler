from datetime import datetime
import pytz
from flask_login import UserMixin

from .. import login_manager 
from ..db import DBManager

db_manager = DBManager()
db = db_manager.get_db()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model,UserMixin):
    tz_IN  = pytz.timezone('Asia/Kolkata')
    id = db.Column(db.Integer,primary_key= True)
    username = db.Column(db.String(20),unique=True, nullable=False)
    password = db.Column(db.String(120),nullable=False)
    created_at = db.Column = db.Column(db.DateTime,nullable= False,default=datetime.now(tz_IN))

    def __repr__(self):
        return f"User('{self.username}')"
