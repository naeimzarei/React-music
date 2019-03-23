/**
 * This file contains the SongSelection component. 
 */

import * as React from "react";
import { observer } from "mobx-react";

const SelectSong = observer(
  class SelectSong extends React.Component {
    // constructor(props) {
      // super(props);
      // this.state = {
      //   songSelected: 1
      // };
      // this.increment = this.increment.bind(this);
    // }
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
);

export default SelectSong;
