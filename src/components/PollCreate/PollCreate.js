import { Component, useState } from "react";
import "./PollCreate.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

const PollCreate = ( {onSubmit} ) => {
    const [o1, seto1] = useState("");
    const [o2, seto2] = useState("");
    const [o3, seto3] = useState("");
    const [o4, seto4] = useState("");

    const o1change = (e) => {
        seto1(e.target.value);
    };
    const o2change = (e) => {
        seto2(e.target.value);
    };
    const o3change = (e) => {
        seto3(e.target.value);
    };
    const o4change = (e) => {
        seto4(e.target.value);
    };

    
    var arr = {
        "options": [o1, o2, o3, o4],
        "correct": -1,
    }
    const Submit = (e) => {
        console.log(o1, o2, o3, o4);
        // this array is used to store the creator's data
        arr = {
            "options": [o1, o2, o3, o4],
            "correct": -1,
        }
        console.log(arr);
        onSubmit(arr);
        // we can't write to a file from here. We'll have to upload this to a database. 
    };

    return (
        <div className='buttonContainer text-center' >
            <form>
                <h1>Option 1</h1>
                <div className='row'>
                    <label><input type="text" onChange={o1change}/></label>
                </div>
                <h1>Option 2</h1>
                <div className='row'>
                    <label><input type="text"  onChange={o2change} /></label>
                </div>
                <h1>Option 3</h1>
                <div className='row'>
                    <label><input type="text"  onChange={o3change} /></label>
                </div>
                <h1>Option 4</h1>
                <div className='row'>
                    <label><input type="text"  onChange={o4change} /></label>
                </div>
                <div className='btn' onClick={() => Submit(arr)}>
                    <h1>submit</h1>
                </div>
            </form>
        </div>
    );
};

//<a href="/verify" className="button">Submit</a>

export default PollCreate;
