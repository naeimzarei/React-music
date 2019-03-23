/**
 * This file contains the top-most element that contains all the
 * other components necessary to run this application. 
 */

import * as React from "react";
import "./style.css";
import Clip from "./Clip";
import TopBar from "./TopBar";
import { BrowserRouter, Route } from "react-router-dom";
import SelectSong from "./SelectSong";
import Config from "./config";
import { observer } from 'mobx-react';

const App = observer(
  class App extends React.Component {
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
);

export default App;