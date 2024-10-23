import React from 'react'
import './doctor_nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from 'react-router-dom'
import back from '../../assets/Group 9.svg'
const Doctor_nav = ({postDoctorData}) => {
   const handlepostdoctor=()=>{
    
     postDoctorData()
   }
   const navigate=useNavigate()
  return (
     <>
     <div className="doctor-nav-wrapper">
        <h4> <img src={back} alt="" onClick={()=> navigate("/")} />Profile</h4>
        <h5>75% Completed!</h5>
        <button onClick={handlepostdoctor}>UPDATE</button>
    

     </div>
     <p className='progress'/>
     </>
  )
}

export default Doctor_nav