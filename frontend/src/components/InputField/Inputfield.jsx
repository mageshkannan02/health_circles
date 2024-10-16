import React from 'react'
import './input.css'
const Inputfield = ({label,placeholder,onchange,asterix,type}) => {
   if(type==="textarea"){
    return (
      <div className="input-div">
      <label htmlFor="">{label}<span>{asterix}</span></label>
      <textarea   placeholder={placeholder} onchange={onchange} />
      </div> 
    )
   
   }
   else{
    return (
      <div className="input-div">
      <label htmlFor="">{label}<span>{asterix}</span></label>
      <input type={type==="date"?"date":"text"} placeholder={placeholder} onchange={onchange} />
      </div>
    )
   }
}

export default Inputfield