from flask import Flask
from redrooster.config import Config



def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    from redrooster.main.routes import main
    from redrooster.errors.handlers import errors
    app.register_blueprint(main)
    app.register_blueprint(errors)

    return app
