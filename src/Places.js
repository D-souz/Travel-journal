import React from "react";
import { ReactDOM } from "react";
import locaton from "./images/location.svg"

function Places(props) {
    // console.log(props)
    return (
        <div className="container-places">
            <div>
                <img src={props.coverImg} alt="mount fujih" className="cover-img"/>
            </div>
            <div className="place-info">
                <p><img src={locaton} alt="location-icon" className="location-icon"/>{props.country} <a href="#">View on Google Maps</a></p>
                <h1>{props.location}</h1>
                <p><strong>{props.date}</strong></p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}
export default Places;