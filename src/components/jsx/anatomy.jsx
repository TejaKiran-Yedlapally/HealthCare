import React from "react";
import '../css/anatomy.css';
import bodyImage from '../assets/anatomy/body.png';
function Anatomy()
{
    return(
        <>
            
            <div className="body">
                    <h3>DashBoard</h3>
                    <img src={bodyImage}  alt="" />
                    <div class="indicator healthyLegs" >🦵Healthy legs</div> 
                    <div class="indicator healthyHeart" >❤️Healthy heart</div>
            </div>
            
        </>
    )
}

export default Anatomy;