''' main flask file'''

from flask import Flask
from .config.sql_config import Config
from .controllers.user import user_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.register_blueprint(user_bp)

    @app.route('/')
    def home():
        return 'Goaler App is UP and Running'
    
    return app




