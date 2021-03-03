import { Component } from "react";
import PieceParser from "../assets/PieceParser"

class PuzzleInput extends Component {
    constructor() {
        super();        
        this.state = {
            url: "example.com"
        };

        this.handleOnSubmit = (e) => {
            e.preventDefault();
            alert("Wait...");
            
            var parser = new PieceParser(this.state.url)
            parser.resolve().then(function(response) {
                this.pieces = response.json();
            })
        };

        this.handleOnChange = (e) => {
            this.setState({url: e.target.value});
        };
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" onChange={this.handleOnChange}/>
            </form>
        );
    }
};

export default PuzzleInput;