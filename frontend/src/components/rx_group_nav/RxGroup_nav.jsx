import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell  } from "@fortawesome/free-regular-svg-icons";
import profile from '../../assets/Doctor Profile.svg'
import bell from '../../assets/Group 3963.svg'

import './rxgroup_nav.css'
import { useNavigate } from 'react-router-dom';

const RxGroup_nav = () => {
  const navigate=useNavigate()
  return (
     <>
       <div className="rxgroup_nav_wrapper">
        <h4>Rx Group</h4>
        <div className="icons ">
           <img src={bell} alt="" />
           <img src={profile} alt="" onClick={()=>navigate("/profile")} />
        </div>
      
        
       </div>
     </>
  )
} 

export default RxGroup_nav