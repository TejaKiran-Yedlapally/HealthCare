import React from "react";
import lung from '../assets/healthcard/lungs.png'
import teeth from '../assets/healthcard/teeth.png'
import bone from '../assets/healthcard/bone.png'
import '../css/healthcard.css'

function HealthCards() {
    return (
        <>
            <div className="cards">
                <p className="thisweek">This Week V</p>
                <div className="items">
                    <div className="align-organs">
                        <img src={lung} alt="lungs" />
                        <span>Lungs</span>
                    </div>
                    <p>Date:26 oct 21</p>
                    <div className="health-bar">
                        <div className="status lungs"></div>
                    </div>
                </div>

                <div className="items">
                    <div className="align-organs">
                        <img src={teeth} alt="teeth" />
                        <span>Teeth</span>
                    </div>
                    <p>Date:26 oct 21</p>
                    <div className="health-bar">
                        <div className="status teeth"></div>
                    </div>
                </div>

                <div className="items">
                    <div className="align-organs">
                        <img src={bone} alt="bone" />
                        <span>Bone</span>
                    </div>
                    <p>Date:26 oct 21</p>
                    <div className="health-bar">
                        <div className="status bone"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealthCards;
