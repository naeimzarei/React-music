import React, { Component } from "react";

class topBar extends Component {
  render() {
    return (
      <ul>
        <li style={{ float: "right" }}>
          <a href="https://helppage.stackblitz.io">Help</a>
        </li>
      </ul>
    );
  }
}
/*
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="https://stackblitz.com/edit/music-app">Music Game</a>
        </li>
*/
export default topBar;
