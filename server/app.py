from dotenv import load_dotenv
from os import getenv
from flask import Flask, request
from parser import get_pieces
import json
from sqlalchemy.exc import IntegrityError
from importlib import import_module

db = import_module('database')

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = "very_secret_key"

db.db.init_app(app)
with app.app_context():
    db.db.create_all()


@app.route('/')
def example():
    url = request.args.get('url')
    if url:
        pid = int(url[url.rindex('/')+1:])
        res = db.Puzzle.query.filter_by(pid=pid).first()
        if res:
            pieces_dicts = res.puzzle
        else:
            pieces = get_pieces(url)
            pieces_dicts = [piece.__dict__ for piece in pieces]

            puzzle = db.Puzzle(pid=pid,
                               link=url, puzzle=pieces_dicts)

            try:
                db.db.session.add(puzzle)
                db.db.session.commit()
            except IntegrityError:
                db.db.session.rollback()

        return json.dumps(pieces_dicts)

    else:
        return json.dumps({"ok": False})


if __name__ == '__main__':
    app.run()
