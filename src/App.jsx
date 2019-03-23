/**
 * This file contains the top-most element that contains all the
 * other components necessary to run this application. 
 */

import * as React from "react";
import "./style.css";
import Clip from "./Clip";
import SelectSong from "./SelectSong";
import { observer } from 'mobx-react';

const App = observer(
  class App extends React.Component {
    render() {
      // this is how you access the store from the top container 
      // you pass this as a prop to the children components from
      // the app component. Look at index.js to see how to initialize
      // store for the first time. We only need to pass store as a 
      // prop to the children component since all our logic resides
      // within the Store file. 
      let store = this.props.store;
      
      // here we do conditional rendering of components instead of
      // using react routers
      switch (store.currentPage) {
        case "/":
          return (
            <div>
              <Clip store={store}></Clip>
            </div>
          );
        case "/select":
          return (
            <div>
              <SelectSong store={ store } />
            </div>
          );
        default:
          return (
            <Clip store={store}></Clip>
          );
      }
    }
  }
);

export default App;