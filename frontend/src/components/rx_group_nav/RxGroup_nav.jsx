import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faUser  } from "@fortawesome/free-regular-svg-icons";
import profile from '../../assets/Doctor Profile.svg'

const RxGroup_nav = () => {
  return (
     <>
       <div className="rxgroup_nav_wrapper">
        <h4>Rx Group</h4>
        <div className="icons ">
           <i><FontAwesomeIcon icon={faBell} /></i>
           <img src={profile} alt="" />
        </div>
        <hr />
        
       </div>
     </>
  )
}

export default RxGroup_nav