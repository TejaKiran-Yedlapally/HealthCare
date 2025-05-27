import React from 'react';
import './App.css';
import Header from "./components/jsx/Header";
import SideBar from './components/jsx/sidebar';
import Anatomy from './components/jsx/anatomy';
import HealthCards from './components/jsx/healthcards';
import Calender from './components/jsx/calender';
import  Activitystatus from './components/jsx/activitystatus'
import UpcomingSchedule from './components/jsx/upcomingSchedule';
function App() {
  return (
    <React.Fragment>
      <div className="main-layout">
        <div className="main-box header" style={{ gridArea: "header" }}>
           <Header/>
        </div>
        <div className="main-box sidebar" style={{ gridArea: "sidebar" }}>
          <SideBar/>
        </div>
        <div className="main-box main" style={{ gridArea: "main" }}>
          <div className="grid-container">
            <div className="box" style={{gridArea:"box1"}}>
                <Anatomy/>
            </div>
            <div className="box" style={{gridArea:"box2"}}>
                <HealthCards/>
            </div>
            <div className="box" style={{gridArea:"box3"}}>
                <Calender/>
            </div>
            <div className="box" style={{gridArea:"box4"}}>
              <Activitystatus/>
            </div>
            <div className="box" style={{gridArea:"box5"}}>
                 <UpcomingSchedule/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
