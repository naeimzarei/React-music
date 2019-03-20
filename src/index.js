import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Clip from "./clip";
import TopBar from "./topBar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SelectSong from "./selectSong";
import Config from "./config";
import Store from "./Store";
import {observer} from 'mobx-react';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songSelected: 1 
    };
    this.url = Config.URLS[this.state.songSelected-1];
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={TopBar} />
            <Route path="/" component={() => <Clip url={this.url} />} exact />
            <Route
              path="/select"
              component={() => 
                <SelectSong songSelected={this.state.songSelected} increment={()=> this.setState({songSelected: this.state.songSelected+1})}/>
              }
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }

  updateSong() {
    this.setState({
      url: Config.URLS[this.state.songSelected-1]
    })
  };
  increment(){
    this.setState({songSelected: this.state.songSelected+1});
  }
}

render(<App />, document.getElementById("root"));
