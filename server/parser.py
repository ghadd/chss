from selenium import webdriver
import re
import sys
import json


class Color:
    WHITE = 0
    BLACK = 1


class PieceType:
    PAWN = 0
    ROOK = 1
    KNIGHT = 2
    BISHOP = 3
    QUEEN = 4
    KING = 5

    T_ = {
        "p": PAWN,
        "r": ROOK,
        "n": KNIGHT,
        "b": BISHOP,
        "q": QUEEN,
        "k": KING
    }


class Piece:
    def __init__(self, piece_id, position):
        self.__piece_id = piece_id
        self.__position = position

        self.color = None
        self.piece_type = None
        self.position = None

    @staticmethod
    def parse(s):
        regex = re.compile(r'piece (\w{2}) square-(\d{2})')
        results = regex.findall(s)

        piece = Piece(*results[0])
        piece.color = Color.WHITE if piece.__piece_id[0] == 'w' else Color.BLACK
        piece.piece_type = PieceType.T_[piece.__piece_id[1]]
        piece.position = tuple(map(int, list(piece.__position)))[::-1]

        return piece

    @property
    def piece_id(self):
        return self.__piece_id


def get_pieces(url):
    options = webdriver.FirefoxOptions()
    options.add_argument('--headless')

    browser = webdriver.Firefox(options=options)
    browser.get(url)

    pieces_elements = browser.find_elements_by_class_name('piece')
    pieces = [Piece.parse(p.get_attribute('class')) for p in pieces_elements]

    browser.quit()

    return pieces
