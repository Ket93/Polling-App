import React from "react";
import "./play.css";

const Play = () => {

    return (

        <>
            <div className="buttonContainer">
                <h3 className="question">INCOMING QUESTION</h3>
                <a class="slide_from_bottom" href="/waiting">Option 1 </a>
                <a class="slide_from_bottom" href="/waiting">Option 2 </a>
                <a class="slide_from_bottom" href="/waiting">Option 3 </a>
                <a class="slide_from_bottom" href="/waiting">Option 4 </a>
            </div>
        </>
    );
};

export default Play;