import { Component } from "react";
import PieceParser from "../assets/PieceParser";
import Board from "./Board";

function partition(a, n) {
  return a.length ? [a.splice(0, n)].concat(partition(a, n)) : [];
}

class PuzzleInput extends Component {
  constructor() {
    super();
    this.state = {
      url: "example.com",
      ready: false,
      pieces: [],
      flipped: false,
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    var parser = new PieceParser(this.state.url);
    parser
      .resolve()
      .then((response) => {
        this.setState({ pieces: response, ready: true });
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  handleOnChange = (e) => {
    this.setState({ url: e.target.value });
  };

  handleOnClick = (e) => {
    this.setState({
      flipped: this.state.flipped ^ true,
    });
  };

  processBoard() {
    let board = partition(Array(64).fill("nn"), 8);

    for (let piece of this.state.pieces) {
      board[8 - piece.position[0]][piece.position[1] - 1] =
        piece._Piece__piece_id;
    }

    return board;
  }

  renderBoard = () => {
    return (
      <div>
        <Board board={this.processBoard()} flipped={this.state.flipped} />
        <div className="controls">
          <span onClick={this.handleOnClick}>
            <img
              className="icon reverse"
              src="/images/reverse.png"
              alt="Reverse board"
            ></img>
          </span>
        </div>

        <div className="infolinks">
          <a href="https://www.chess.com/learn-how-to-play-chess" target="_blank" rel="noreferrer">
            <button>Learn to play chess</button>
          </a>
          <a href={this.state.url} target="_blank" rel="noreferrer">
            <button>Solve this puzzle on chess.com</button>
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} style={{ display: "block" }}>
          <input type="text" onChange={this.handleOnChange} />
        </form>

        {this.state.ready && this.renderBoard()}
      </div>
    );
  }
}

export default PuzzleInput;
