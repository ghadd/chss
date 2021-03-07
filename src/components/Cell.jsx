import { Component } from "react";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.value = props.value;
    this.coords = props.coords;
    this.height = props.height;
    this.flippedOffset = props.flipped ? -7 : 0;
  }

  render() {
    const mainColor =
      (this.coords[0] + this.coords[1]) % 2 === 0 ? "#eeeed2" : "#85aa53";
    const secondaryColor =
      (this.coords[0] + this.coords[1]) % 2 === 0 ? "#85aa53" : "#eeeed2";

    return (
      <div
        className={`cell ${this.value}`}
        style={{
          backgroundColor: mainColor,
          height: this.height,
        }}
      >
        {this.coords[0] === 7 + this.flippedOffset && (
          <span
            className="alphabetic"
            style={{
              color: secondaryColor,
            }}
          >
            {String.fromCharCode("a".charCodeAt(0) + this.coords[1])}
          </span>
        )}
        {this.coords[1] === 0 - this.flippedOffset && (
          <span
            className="numeric"
            style={{
              color: secondaryColor,
            }}
          >
            {8 - this.coords[0]}
          </span>
        )}
        {this.value !== "nn" && (
          <img src={`/images/${this.value}.png`} alt={this.value} />
        )}
      </div>
    );
  }
}

export default Cell;
