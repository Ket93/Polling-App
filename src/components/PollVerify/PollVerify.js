import React from "react";
import { useState } from "react";
import Option from "./Option.js"

const PollVerify = () => {
    const arr = {
        "options": ["option1", "option2", "option3", "option4"],
        "correct": -1,
    }

    function onClick(id) {
        // there can only be one right answer
        arr.correct = id;
        console.log(arr)
    }

    return (
        <div className="options">
            <h1 className="title">Select the correct option</h1>
            <Option key={1} id={1} text={arr.options[0]} onClick={onClick} />
            <Option key={2} id={2} text={arr.options[1]} onClick={onClick} />
            <Option key={3} id={3} text={arr.options[2]} onClick={onClick} />
            <Option key={4} id={4} text={arr.options[3]} onClick={onClick} />

        </div>
    );
};

export default PollVerify;
