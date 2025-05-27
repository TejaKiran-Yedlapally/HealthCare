import React from "react";
import '../css/sidebar.css';

import dashboard from '../assets/sidebar/dashboard.png'
import history from '../assets/sidebar/history.png'
import calendar from "../assets/sidebar/calendar.png"
import appointments from "../assets/sidebar/appointments.png"
import statistics from "../assets/sidebar/statistics.png"
import chat from "../assets/sidebar/chat.png"
import support from "../assets/sidebar/support.png"
import setting from "../assets/sidebar/setting.png"


function SideBar() {
    return (
        <React.Fragment>
            <div className="side-bar">
                <div className="nav-top">
                    {/* <p id="logo">HealthCare.</p> */}
                    <nav className="nav-links1">
                        <p>General</p>
                        <ul className="ul1">
                            <li><span><img src={dashboard} alt="dashbaord" /></span><a id="dashboard"
                                href="#">DashBoard</a></li>
                            <li><span><img src={history} alt="" /></span><a href="#">History</a></li>
                            <li><span><img src={calendar} alt="" /></span><a href="#">Calender</a></li>
                            <li><span><img src={appointments} alt=" " /></span><a href="#">Appointments</a>
                            </li>
                            <li><span><img src={statistics} alt="" /></span><a href="#">Statistics</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="nav-bottom">
                    <nav className="nav-links2">
                        <div id="nav-bottom-top">
                            <p>Tools</p>
                            <ul className="ul2">
                                <li><span><img src={chat} alt="" /></span><a href="#">Chat</a></li>
                                <li><span><img src={support} alt="" /></span><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div id="nav-bottom-foot">
                            <span><img src={setting} alt="" /></span>
                            <p><a href="#">Setting</a></p>
                        </div>
                    </nav>
                </div>

            </div>
        </React.Fragment>
    )
}

export default SideBar;