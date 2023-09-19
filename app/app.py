from flask import Flask
from flask_assets import Environment, Bundle
from views.home import home_blueprint
import os
from assets_registry import js_files, scss_files

def create_app_assets(app):
    assets = Environment(app)
    register_app_assets_js(assets)
    register_app_assets_scss(assets)
    return assets


def register_app_assets_js(assets):
    js = Bundle(*js_files,
            filters='jsmin', output='gen/js/packed.js')
    
    assets.register('js_all', js)

def register_app_assets_scss(assets):
    scss = Bundle(*scss_files, filters='pyscss', output='gen/css/packed.css')
    
    assets.register('scss_all', scss)

def app_config():
    return {'SECRET_KEY': "Havsalt"}

def register_app_blueprints(app):
    app.register_blueprint(home_blueprint, url_prefix='/')

def create_app():
    app = Flask(__name__, template_folder='template')

    app.config.update(app_config())

    register_app_blueprints(app)

    return app

app = create_app()
assets = create_app_assets(app)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    debug = bool(os.environ.get('DEBUG', False))
    
    app.run(debug=debug, host='0.0.0.0', port=port)