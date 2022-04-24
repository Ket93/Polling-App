import React from "react";
import X from "../.././images/xmark.png";
import "./success.css";


const Success = () => {

    return (

        <>

            <div class="stylediv">
                <div class="white">
                    <div class="checkmark-circle">
                        <div class="background"></div>
                        <div class="checkmark draw"></div>
                    </div>
                    <h1>Congratulations!</h1>
                    <h4>Your answer was correct! Well done!</h4>
                    <h4>Stay tuned! The next question is coming soon!</h4>

                </div>
            </div>

        </>
    );
};

export default Success;