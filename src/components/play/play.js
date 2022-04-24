import React from "react";
import "./play.css";

/*
const Play = () => {
  return (
    <>
      <div className="buttonContainer">
        <h3 className="question">INCOMING QUESTION</h3>
        <a class="slide_from_bottom" href="/waiting">
          Option 1{" "}
        </a>
        <a class="slide_from_bottom" href="/waiting">
          Option 2{" "}
        </a>
        <a class="slide_from_bottom" href="/waiting">
          Option 3{" "}
        </a>
        <a class="slide_from_bottom" href="/waiting">
          Option 4{" "}
        </a>
      </div>
    </>
  );
};
*/

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, answers: [], userAnswer: -1 };
  }

  async componentDidMount() {
    const url = "http://localhost:3301/6264df6fd4646c90ecafa365";
    //const url = "http://localhost:3301/" + this.props.id;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ data: json["data"] });
    this.setState({ answers: json["data"]["answers"] });
  }

  render() {
    return (
      <>
        <div className="buttonContainer">
          <h3 className="question">{this.state.data["question"]}</h3>
          <a className="slide_from_bottom" href="/waiting">
            <span>{this.state.answers[0]}</span>
          </a>
          <a className="slide_from_bottom" href="/waiting">
            <span>{this.state.answers[1]}</span>
          </a>
          <a className="slide_from_bottom" href="/waiting">
            <span>{this.state.answers[2]}</span>
          </a>
          <a className="slide_from_bottom" href="/waiting">
            <span>{this.state.answers[3]}</span>
          </a>
        </div>
      </>
    );
  }
}

export default Play;
