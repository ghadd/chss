import { Component } from "react";

class Cell extends Component {
    constructor(props) {
        super(props);
        this.value = props.value;
        this.coords = props.coords;
        this.height = props.height;
    }

    render() {
        return <div 
            className={`cell ${this.value}`}
            style={
                {backgroundColor: 
                    `${(this.coords[0] + this.coords[1]) % 2 === 0 ?
                         "#eeeed2" : "#85aa53"}`,
                height: this.height
                }
                }>
            <img src={`/images/${this.value}.png`} alt={this.value}/>
        </div>
    }
}

export default Cell;