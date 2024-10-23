import React from 'react'
import './input.css'
const   Inputfield = ({label,placeholder,handledoctordata,asterix,type,name}) => {
   if(type==="textarea"){
    return (
      <div className="input-div">
      <label htmlFor="">{label}<span>{asterix}</span></label>
      <textarea   placeholder={placeholder} onChange={handledoctordata} name={name} />
      </div> 
    )
   
   }
   else{
    return (
      <div className="input-div">
      <label htmlFor="">{label}<span>{asterix}</span></label>
      <input type={type==="date"?"date":"text"} placeholder={placeholder} onChange={handledoctordata} name={name}/>
      </div>
    )
   }
}

export default Inputfield