import React from 'react'
import './doctor_nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import back from '../../assets/Group 9.svg'
const Doctor_nav = () => {
  return (
     <>
     <div className="doctor-nav-wrapper">
        <h4> <img src={back} alt="" />Profile</h4>
        <h5>75% Completed!</h5>
        <button>UPDATE</button>
    

     </div>
     <p className='progress'/>
     </>
  )
}

export default Doctor_nav