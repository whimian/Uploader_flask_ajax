from flask import Flask, render_template, request, jsonify
from PIL import Image


def create_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html')

    app.add_url_rule('/', endpoint='index')

    @app.route('/uploadajax', methods=['POST', 'GET'])
    def uploadajax():
        print(request.files)
        image_file = request.files['imgfile']

        image = Image.open(image_file)
        # image_file is a FileStorage object which behaves like a normal file object
        return jsonify(predict_result="Size of image is {}".format(image.size))

    return app
