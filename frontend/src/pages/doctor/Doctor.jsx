import React, { useState } from 'react'
import Doctor_info from '../../components/doctor_info/Doctor_info'
import Doctor_nav from '../../components/doctor_nav/Doctor_nav'
import Doctor_profile from '../../components/Doctor_profile/Doctor_profile'
import './doctor.css'
import axios  from 'axios'
 
const Doctor = () => {
  const [doctordata,setDoctordata]=useState("")
  const baseurl= "http://localhost:4000/health"

  const postDoctorData=async()=>{

    try {
      const data=await axios.post(`${baseurl}/addDoctors`,doctordata)
       console.log(data);
       
    } catch (error) {
       console.log(error);
       
    } 
    
  }
   
  
  return (
     <>
     <div className="wrapper container-md col-8 ">
     <Doctor_nav  postDoctorData={postDoctorData}/>
     <div className="content d-flex">
     <Doctor_profile />
      <Doctor_info  setDoctordata={setDoctordata}/> 
     </div>
   
     </div>
     
     </>
  )
}

export default Doctor