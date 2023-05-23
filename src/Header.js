import React from "react";
import earth from "./images/earth.svg"

function Header() {
    return (
        <div className="header">
            <img src={earth} alt="globe icon" className="earth-icon" />
            <p>Dsouza's travel journal.</p>
        </div>
    );
}
export default Header;