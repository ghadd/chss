from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Puzzle(db.Model):
    __tablename__ = "puzzles"
    id = db.Column(db.Integer, primary_key=True)
    pid = db.Column(db.Integer)

    link = db.Column(db.String(250), nullable=False, unique=True)
    puzzle = db.Column(db.JSON, nullable=False)

    def __repr__(self):
        return '<Puzzle #{}>'.format(self.id)
