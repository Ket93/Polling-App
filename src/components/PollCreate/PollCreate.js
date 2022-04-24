import { Component, useState } from "react";
import "./PollCreate.css";
import { Button } from "./Button.js";
import { ListComponent } from "./ListComponent.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const PollCreate = () => {
    const [components, setComponents] = useState([0]);

    function addComponent() {
        setComponents([...components, components.length]);
    }

    function onDelete(id) {
        console.log(id);
        setComponents([
            ...components.slice(0, id),
            ...components.slice(id + 1),
        ]);
        console.log(components.length);
    }


    function complete() {
        var form = document.querySelectorAll("name");
        console.log(form);
    }

    return (
        <div>
            <Button onClick={addComponent} text="Call Component" />
            {components.map((item, i) => (
                <ListComponent
                    key={i}
                    id={i}
                    text={item}
                    onDelete={onDelete}
                    complete={complete}
                />
            ))}
            <Button onClick={complete} text="Submit" />
        </div>
    );
};

export default PollCreate;
