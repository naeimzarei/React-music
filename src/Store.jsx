/**
 * This file contains all the necessary logic for updating state as well
 * as holding variables. This is where the magic of MobX comes into play. 
 * This file is the only place where all state variables are shared between
 * files which makes it so much easier to update the state as well as any
 * necessary variables. 
 */

import Config from './config';
import { observable, decorate, action } from "mobx";

class Store {
    url = Config.URLS[0];
    audio = new Audio(this.url);
    songSelected = 1;
    currentPage = "/";
    buttonSelected = 1;
    isPlaying = false;
    isPaused = true;
    startTime = Math.floor(Math.random() * (241 - 20));
    lookingState = false;
    playedAtLeastOnce = false;
    score = 0;

    // Increments songSelected by 1
    increment() {
        this.songSelected++;
        if (this.songSelected > 3) {
            this.songSelected = 1;
            this.url = Config.URLS[0];
        } else {
            this.url = Config.URLS[this.songSelected - 1];
        }
        this.audio = new Audio(this.url);
    }

    // Changes the page
    setPage(page) {
        this.currentPage = page;
    }

    // resets the song track 
    reset() {
        this.isPlaying = false;
        this.isPaused = true;
        this.startTime = Math.floor(Math.random() * (241 - 20));
        this.lookingState = false;
        this.playedAtLeastOnce = false;
    }

    // plays the song track
    play() {
        this.isPlaying = true;
        this.isPaused = false;
        this.lookingState = false;
        this.playedAtLeastOnce = true;
        this.audio.currentTime = this.startTime;
        this.audio.ontimeupdate = this.isPaused;
        this.audio.play();
    }

    // pauses the song track
    pause() {
        if (this.audio.currentTime > this.startTime + 20 && !this.lookingState) {
            this.isPlaying = false;
            this.isPaused = true;
            this.audio.pause();
        }
    }

    // plays the song track
    play2() {
        if (this.playedAtLeastOnce) {
            this.lookingState = true;
            this.isPlaying = true;
            this.isPaused = false;
            this.currentTime = 0;
            this.audio.play();
        }
    }

    // pauses the song track
    pause2() {
        this.isPlaying = false;
        this.isPaused = true;
        this.audio.pause();
    }

    // gets the button class
    getBtnClass(id) {
        switch (id) {
            case 1:
                if (this.buttonSelected === 1) {
                    return "gamebtn1S";
                } else {
                    return "gamebtn1";
                }
            case 2:
                if (this.buttonSelected === 2) {
                    return "gamebtn1S";
                } else {
                    return "gamebtn1";
                } 
            case 3:
                if (this.buttonSelected === 3) {
                    return "gamebtn2S";
                } else {
                    return "gamebtn2";
                }
            case 4:
                if (this.buttonSelected=== 4) {
                    return "gamebtn3S";
                } else {
                    return "gamebtn3";
                } 
            default:
                console.log("error button state");
        }
    }

    // checks for the right time 
    check(rightTime) {
        let temp = this.score + 1000;
        this.score = temp;
        if (this.lookingState) {
          if (
            rightTime - 10 < this.audio.currentTime &&
            rightTime + 10 > this.audio.currentTime
          ) {
            alert("win");
            this.reset();
            this.pause2();
          } else {
            alert("wrong " + rightTime + " " + this.audio.currentTime);
          }
        }
    }

    // keyboard handler 
    keyPressFunction(event) {
        if (event.keyCode === 32) {
          console.log("space pressed");
          let temp = this.buttonSelected;
          switch (temp) {
            case 1:
            case 2:
            case 3:
              temp++;
              break;
            case 4:
              temp = 1;
              break;
            default:
              console.log("error button state");
          }
          
          this.buttonSelected = temp;
        }
        if (event.keyCode === 13) {
          console.log("enter pressed");
          switch (this.buttonSelected) {
            case 1:
              this.play();
              break;
            case 2:
              this.play2();
              break;
            case 3:
              this.pause2();
              break;
            case 4:
              this.check(this.startTime);
              break;
            default:
              console.log("error button state");
          }
        }
        if (event.keyCode === 87) {
          //w
          this.play();
        }
        if (event.keyCode === 65) {
          //a
          this.play2();
        }
        if (event.keyCode === 83) {
          //s
          this.pause2();
        }
        if (event.keyCode === 68) {
          //d
          this.check(this.startTime);
        }
      }
}

/**
 * The decorate function is necessary since it allows you to
 * create observable variables, computed functions, and to implement
 *  every other MobX feature, please look at URL for more information. You MUST
 * use action.bound when dealing with events, such as click or keypress events. 
 * https://mobx.js.org/best/decorators.html
 */
decorate(Store, {
    audio: observable,
    songSelected: observable,
    url: observable,
    currentPage: observable,
    buttonSelected: observable,
    isPlaying: observable,
    isPaused: observable,
    startTime: observable,
    lookingState: observable,
    playedAtLeastOnce: observable,
    score: observable,
    increment: action.bound,
    setPage: action.bound,
    reset: action.bound,
    play: action.bound,
    pause: action.bound,
    play2: action.bound,
    pause2: action.bound,
    getBtnClass: action.bound,
    check: action.bound
});

export default Store;