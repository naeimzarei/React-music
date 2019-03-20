import React, { Component } from "react";

class Clip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSelected: 1,
      play: false,
      pause: true,
      startTime: Math.floor(Math.random() * (241 - 20)),
      lookingState: false,
      playedAtLeastOnce: false,
      score: 0
    };
    // this.url =
    //   "https://www.cs.unc.edu/~gb/uploaded-files/bokai247@ISIS.UNC.EDU/Chopin%2C%20Nocturne%20in%20E-flat%20Major.mp3";
    console.log('url is', this.props.url);
    this.audio = new Audio(this.props.url);
    this.keyPressFunction = this.keyPressFunction.bind(this);
  }

  Reset = () => {
    this.setState({
      play: false,
      pause: true,
      startTime: Math.floor(Math.random() * (241 - 20)),
      lookingState: false,
      playedAtLeastOnce: false
    });
  };
  play = () => {
    this.setState({
      play: true,
      pause: false,
      lookingState: false,
      playedAtLeastOnce: true
    });
    //console.log(this.audio.duration);
    //console.log(this.state.startTime);
    this.audio.currentTime = this.state.startTime;
    this.audio.ontimeupdate = this.pause;
    this.audio.play();
  };

  pause = () => {
    if (
      this.audio.currentTime > this.state.startTime + 20 &&
      !this.state.lookingState
    ) {
      this.setState({ play: false, pause: true });
      this.audio.pause();
    }
  };

  play2 = () => {
    if (this.state.playedAtLeastOnce) {
      this.setState({ lookingState: true });
      this.setState({ play: true, pause: false });
      this.audio.currentTime = 0;
      this.audio.play();
    }
  };

  pause2 = () => {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  };

  check = rightTime => {
    var temp = this.state.score + 1000;
    this.setState({
      score: temp
    });
    if (this.state.lookingState) {
      if (
        rightTime - 10 < this.audio.currentTime &&
        rightTime + 10 > this.audio.currentTime
      ) {
        alert("win");
        this.Reset();
        this.pause2();
      } else {
        alert("wrong " + rightTime + " " + this.audio.currentTime);
      }
    }
  };

  getBtnClass = id => {
    switch (id) {
      case 1:
        if (this.state.buttonSelected === 1) {
          return "gamebtn1S";
        } else return "gamebtn1";
      case 2:
        if (this.state.buttonSelected === 2) {
          return "gamebtn1S";
        } else return "gamebtn1";
      case 3:
        if (this.state.buttonSelected === 3) {
          return "gamebtn2S";
        } else return "gamebtn2";
      case 4:
        if (this.state.buttonSelected === 4) {
          return "gamebtn3S";
        } else return "gamebtn3";
      default:
        console.log("error button state");
    }
  };

  keyPressFunction(event) {
    if (event.keyCode === 32) {
      console.log("space pressed");
      var temp = this.state.buttonSelected;
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
      this.setState({ buttonSelected: temp });
      console.log(this.state.buttonSelected);
    }
    if (event.keyCode === 13) {
      console.log("enter pressed");
      switch (this.state.buttonSelected) {
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
          this.check(this.state.startTime);
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
      this.check(this.state.startTime);
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyPressFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressFunction, false);
  }

  render() {
    // let msg = new SpeechSynthesisUtterance("Hello World");
    // window.speechSynthesis.speak(msg);
    console.log(this.props.songSelected);
    return (
      <div>
        <a href="/select">Select Song</a>
        <h1>Play Clip</h1>
        <h1 className="rightDiv">score: {this.state.score}</h1>
        <div className="center1">
          <button onClick={this.play} className={this.getBtnClass(1)}>
            <i className="fa fa-play fa-5x" />
          </button>
        </div>
        <hr />
        <h1>Play Music</h1>
        <div className="center2">
          <button onClick={this.play2} className={this.getBtnClass(2)}>
            <i className="fas fa-play-circle fa-5x" />
          </button>
          <button onClick={this.pause2} className={this.getBtnClass(3)}>
            <i className="fa fa-stop-circle fa-5x" />
          </button>
          <button
            onClick={() => this.check(this.state.startTime)}
            className={this.getBtnClass(4)}
          >
            <i className="fas fa-check-circle fa-5x" />
          </button>
        </div>
      </div>
    );
  }
}

export default Clip;
