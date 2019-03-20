import React, { Component } from "react";

import Topbar from "./topBar";

class Root extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;
