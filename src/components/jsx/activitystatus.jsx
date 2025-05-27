import React from "react";
import '../css/activitystatus.css';

function Activitystatus() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const barHeights = [
        '60%', '30%', '20%', '50%', '60%', '30%', '80%', '50%',
        '60%', '30%', '80%', '50%', '40%', '30%', '80%', '50%',
        '60%', '30%', '20%', '60%', '30%', '80%', '50%', '60%',
        '30%', '50%', '60%', '30%', '80%', '50%'
    ];

    return (
        <div className="activity">
            <div className="activity-head">
                <h3>Activity</h3>
                <p>3 appointments on this week</p>
            </div>

            <div className="bar-chart">
                {barHeights.map((height, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{
                            height
                        }}
                    />
                ))}
            </div>

            <div className="days">
                {days.map((day, index) => (
                    <p key={index}>{day}</p>
                ))}
            </div>
        </div>
    );
}

export default Activitystatus;
