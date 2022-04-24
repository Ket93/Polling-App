import React from "react";
import "./waiting.css";

class Waiting extends React.Component {
  render() {
    return (
      <>
        <head>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          </style>
        </head>
        <main>
          <div className="dank-ass-loader">
            <div className="row">
              <div className="arrow up outer outer-18"></div>
              <div className="arrow down outer outer-17"></div>
              <div className="arrow up outer outer-16"></div>
              <div className="arrow down outer outer-15"></div>
              <div className="arrow up outer outer-14"></div>
            </div>
            <div className="row">
              <div className="arrow up outer outer-1"></div>
              <div className="arrow down outer outer-2"></div>
              <div className="arrow up inner inner-6"></div>
              <div className="arrow down inner inner-5"></div>
              <div className="arrow up inner inner-4"></div>
              <div className="arrow down outer outer-13"></div>
              <div className="arrow up outer outer-12"></div>
            </div>
            <div className="row">
              <div className="arrow down outer outer-3"></div>
              <div className="arrow up outer outer-4"></div>
              <div className="arrow down inner inner-1"></div>
              <div className="arrow up inner inner-2"></div>
              <div className="arrow down inner inner-3"></div>
              <div className="arrow up outer outer-11"></div>
              <div className="arrow down outer outer-10"></div>
            </div>
            <div className="row">
              <div className="arrow down outer outer-5"></div>
              <div className="arrow up outer outer-6"></div>
              <div className="arrow down outer outer-7"></div>
              <div className="arrow up outer outer-8"></div>
              <div className="arrow down outer outer-9"></div>
            </div>
          </div>

          <div>
            <h2 className="message1">Your response has been submitted.</h2>
            <h2 className="message2">
              Keep watching to see if you were correct!
            </h2>
          </div>
        </main>
      </>
    );
  }
}

export default Waiting;
