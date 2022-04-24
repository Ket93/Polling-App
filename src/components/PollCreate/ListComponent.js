import React from "react";
import { GrClose } from "react-icons/gr";

const ListComponent = ({ id, text, onDelete }) => {
    return (
        <div className="Component">
            <div className="row justify-content">
                <div className="col-sm-8">
                    <form id="name">
                        <label>
                            Name:
                            <input type="text" />
                        </label>
                    </form>
                </div>
                <div className="col-sm-3">
                    <form id="amount">
                        <label>
                            Amount:
                            <input type="text"/>
                        </label>
                    </form>
                </div>

                <div className="col-sm-1">
                    <GrClose onClick={() => onDelete(id)} />
                </div>
            </div>
        </div>
    );
};

export { ListComponent };
