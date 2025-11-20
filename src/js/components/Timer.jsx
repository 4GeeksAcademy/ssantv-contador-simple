import React from "react";

const Timer = (props) => {
    return (
        <div className="card col-1 bg-dark mx-1">
            <div className="card-body">
                <p className="card-title display-1 text-center text-light">{props.value}</p>
            </div>
        </div>
    )
};

export default Timer;