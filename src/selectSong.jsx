/**
 * This file contains the SongSelection component. 
 */

import * as React from "react";
import { observer } from "mobx-react";

const SelectSong = observer(
  class SelectSong extends React.Component {
    render() {
      let store = this.props.store;
      return (
        <div>
          <button onClick={() => store.setPage("/")}>Home</button>
          <br />
          <button onClick={() => store.increment()}>Increment</button>
          <p>{store.songSelected}</p>
        </div>
      );
    }
  }
);

export default SelectSong;
