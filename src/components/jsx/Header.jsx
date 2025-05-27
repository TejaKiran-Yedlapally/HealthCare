import React from "react";
import '../css/header.css';
import  profile from "../assets/header/profile.png";

function Header() {
    return (
        <React.Fragment>

            <header className="header">
                <div className="logo-search flex">
                    <p className="logo flex">Health<span id="care">Care.</span></p>
                    <div id="search" className="flex">
                        <input type="text" name="" placeholder="Search" />
                    </div>
                </div>
                <div className="profile-addbutton">
                    <img src={profile}  alt=""/>
                    <button>+</button>
                </div>
            </header>

        </React.Fragment>
    )
}

export default Header;