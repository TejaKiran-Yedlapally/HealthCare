import React from "react";
import '../css/calender.css'


function Calender() {
    const days = [
        { day: "Mon", date: 25 },
        { day: "Tue", date: 26 },
        { day: "Wed", date: 27 },
        { day: "Thu", date: 28 },
        { day: "Fri", date: 29 },
        { day: "Sat", date: 30 },
        { day: "Sun", date: 31 },
    ];
    return (
        <>
            <div id="month">
                <p>October 2021</p>
                <p>{"<-  ->"}</p>
            </div>
            <div className="calender">
                {days.map(({ day, date }, index) => (
                    <div className={`day ${day === 'Tue' ? 'tue' : ''}`} key={index}>
                        <div className="date">
                            <p>{day}</p>
                            <p>{date}</p>
                        </div>
                        <div className="time">
                            <p>10:00</p>
                            <p>12:00</p>
                            <p>2:00</p>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}
export default Calender;