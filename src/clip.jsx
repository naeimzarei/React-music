/**
 * This file contains the Clip component. 
 */

import * as React from "react";
import { observer } from "mobx-react";

const Clip = observer(
  class Clip extends React.Component {
    render() {
      let store = this.props.store;
      // let msg = new SpeechSynthesisUtterance("Hello World");
      // window.speechSynthesis.speak(msg);
      return (
        <div>
          <button onClick={() => store.setPage("/select")}>Select Song</button>
          <h1>Play Clip</h1>
          <h1 className="rightDiv">score: {store.score}</h1>
          <div className="center1">
            <button onClick={() => store.play()} className={store.getBtnClass(1)}>
              <i className="fa fa-play fa-5x" />
            </button>
          </div>
          <hr />
          <h1>Play Music</h1>
          <div className="center2">
            <button onClick={() => store.play2()} className={store.getBtnClass(2)}>
              <i className="fas fa-play-circle fa-5x" />
            </button>
            <button onClick={() => store.pause2()} className={store.getBtnClass(3)}>
              <i className="fa fa-stop-circle fa-5x" />
            </button>
            <button onClick={() => store.check(store.startTime)} className={store.getBtnClass(4)} >
              <i className="fas fa-check-circle fa-5x" />
            </button>
          </div>
        </div>
      );
    }

    // componentDidMount() {
    //   document.addEventListener("keydown", this.keyPressFunction, false);
    // }
    // componentWillUnmount() {
    //   document.removeEventListener("keydown", this.keyPressFunction, false);
    // }
  }
);

export default Clip;
