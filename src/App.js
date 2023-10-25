import { Component } from "react";
import "./App.css";
import cat from "./img.jpg";

class App extends Component {
  state = {
    person: {
      fullName: "ahmed",
      bio: "no comment",
      imgSrc: cat,
      profession: "FS Web Developer",
    },shows:false,
    timeInterval:0
  };
  componentDidMount = () => {
    this.intervalID = setInterval(() => {
      this.setState(
        {
          timeInterval: this.state.timeInterval + 1,});
    },1000);
  };
  toggleShow = () => {
    this.setState({
      shows: !this.state.shows,
      timeInterval:0
    });
  };
 commpnntWillMount = () => {
    clearInterval(this.intervalID);
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>show profile</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} width={'320px'} alt="" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time interval since component was mounted: {this.state.timeInterval}</p>
      </div>
    );
  }
}

export default App;
