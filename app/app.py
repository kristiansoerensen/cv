from flask import Flask
from views.home import home_blueprint
import os

def create_app():
    app = Flask(__name__, template_folder='template')
    app.config['SECRET_KEY'] = "Havsalt"
    app.register_blueprint(home_blueprint, url_prefix='/')
    return app

app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    debug = bool(os.environ.get('DEBUG', False))
    app.run(debug=debug, host='0.0.0.0', port=port)