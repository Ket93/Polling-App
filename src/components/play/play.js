import React from "react";
import "./play.css";

const Play = () => {

    return (

        <>
            <div className="buttonContainer">
                <h3 className="question">INCOMING QUESTION</h3>
                <button class="slide_from_bottom">Option 1 </button>
                <button class="slide_from_bottom">Option 2 </button>
                <button class="slide_from_bottom">Option 3 </button>
                <button class="slide_from_bottom">Option 4 </button>

                <div class="wrapper">
                    <div class="link_wrapper">
                        <a href="/play" className="submitButton">Submit!</a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Play;