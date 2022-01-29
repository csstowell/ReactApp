import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// shows value passed to square
class Square extends React.Component {
  // store the current value of the Square in this.state,
  // and change it when the Square is clicked.
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: null,
  //     };
  //   }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

// pass prop called value to the square
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // array of 9 nulls corresponding to the 9 squares
      // this.state.squares
      // we defined the squares array in the Board's constructor
      squares: Array(9).fill(null),
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }










  // now modify the Board's renderSquare method to read from it
  renderSquare(i) {
    return (
      <Square
            value={this.state.squares[i]}
            // pass down a function from the Board to the Square
            // have Square call that function (onClick) when square is clicked
            onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
