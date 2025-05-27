import React from "react";
import '../css/upcomingschedule.css';

function UpcomingSchedule() {
    const schedules = [
        {
            day: "Thursday",
            appointments: [
                "Health checkup complete - 09:30",
                "Ophthalmologist - 12:00"
            ]
        },
        {
            day: "Saturday",
            appointments: [
                "Cardiologist - 10:00"
            ]
        }
    ];

    return (
        <div className="upcoming-schedule">
            <div className="appointment">
                <div className="message mark">
                    <p>Dentist <span>🦷</span></p>
                    <p>9:00-11:00</p>
                    <p>Dr. Cameron williamson</p>
                </div>
                <div className="message">
                    <p>Physiotherapy Appointmet <span>💪</span></p>
                    <p>9:00-11:00</p>
                    <p>Dr. Kevin Djones</p>
                </div>
            </div>
            <h3>The Upcoming Schedule</h3>
            {schedules.map((schedule, index) => (
                <div className="schedule" key={index}>
                    <h4>On {schedule.day}</h4>
                    <div className="day-group">
                        {schedule.appointments.map((appointment, idx) => (
                            <div className="simple-card" key={idx}>
                                {appointment}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingSchedule;
