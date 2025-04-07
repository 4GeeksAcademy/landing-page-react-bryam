import React from "react";

const Card = () => {
    return (
        <div className="card px-0 m-2 card-width">
            <img src="https://picsum.photos/id/96/4752/3168" className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">description</p>
                    <a href="#" className="btn btn-primary">more info</a>
                </div>
        </div>
    );
};

export default Card;