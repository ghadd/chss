import { Component } from "react";
import Cell from "./Cell";


class Board extends Component {
    constructor(props) {
        super(props);
        this.board = props.board;
        this.shape = [this.board.length, this.board[0].length]
        this.cellSize = props.cellSize ?? "60px";
        this.flipped = props.flipped ?? false;
    }

    render() {
        let rendered = this.board.map((row, rowIdx) => {
            return row.map((file, fileIdx) => {
                return <Cell 
                    value={file}
                    key={[rowIdx, fileIdx]}
                    coords={[rowIdx, fileIdx]}
                    height={this.cellSize}
                />
            })
        });
        console.log(rendered);

        return <div style={
            {
                display: "grid", 
                gridTemplateColumns: `repeat(${this.shape[1]}, ${this.cellSize})`
            }
        }>
            {rendered}
        </div>
    }
}

export default Board;