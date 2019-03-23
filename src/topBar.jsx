/**
 * This file contains the TopBar component.
 */

import * as React from "react";
import { observer } from "mobx-react";

const TopBar = observer(
  class TopBar extends React.Component {
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
);
/*
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="https://stackblitz.com/edit/music-app">Music Game</a>
        </li>
*/

export default TopBar;