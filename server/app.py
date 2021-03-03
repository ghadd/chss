from flask import Flask, request
from parser import get_pieces
import json

app = Flask(__name__)


@app.route('/')
def example():
    url = request.args.get('url')
    if url:
        pieces = get_pieces(url)
        pieces_dicts = [piece.__dict__ for piece in pieces]

        return json.dumps(pieces_dicts)
    else:
        return json.dumps({"ok": False})


if __name__ == '__main__':
    app.run()
