import React from "react";
import "./wrong.css";


const Wrong = () => {

    return (

        <>

            <div class="stylediv">
                <div class="white">
                    <div class="wrapper">
                        <svg class="checkmark1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark_circle" cx="26" cy="26" r="25" fill="none" />
                            <path class="checkmark_check" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8" /></svg>
                    </div>
                    <h1>You guessed wrong :( </h1>
                    <h4>Get good at the game, and contemplat</h4>
                    <h4>Stay tuned! The next question is coming soon!</h4>

                </div>
            </div>

        </>
    );
};

export default Wrong;