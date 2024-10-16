import React from 'react'
import Doctor_info from '../../components/doctor_info/Doctor_info'
import Doctor_nav from '../../components/doctor_nav/Doctor_nav'
import Doctor_profile from '../../components/Doctor_profile/Doctor_profile'
import './doctor.css'
const Doctor = () => {
  return (
     <>
     <div className="wrapper container-md col-8 ">
     <Doctor_nav />
     <div className="content d-flex">
     <Doctor_profile />
      <Doctor_info /> 
     </div>
   
     </div>
     
     </>
  )
}

export default Doctor