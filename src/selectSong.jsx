import React, { Component } from "react";

class selectSong extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   songSelected: 1
    // };
    // this.increment = this.increment.bind(this);
  }
  increment() {
    // var temp = this.state.songSelected + 1;
    // this.setState({
    //   songSelected: temp
    // });
    // this.props.increment();
  }
  render() {
    return (
      <div>
        <a href="/">Home</a>
        <br />
        <button onClick={this.props.increment}>Increment</button>
        {this.props.songSelected}
      </div>
    );
  }
}

export default selectSong;
