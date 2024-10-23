import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './drug_nav.css'

const DrugNav = ({name,setPopActive = () => {}, setIsdose = () => {} ,setFrequency= ()=>{},setDuration=()=>{},setAddrx=()=>{}}) => {
  const handleInactive=()=>{
    
   
    
    setPopActive(false)
    setFrequency(false)
    setDuration(false)
    setAddrx(false)
    setIsdose(false)
  }
  return (
    <>
      <div className="drug_nav">
        <p>{name}</p>
        <i><FontAwesomeIcon icon={faXmark} onClick={handleInactive}  /></i>

      </div>  
    </>
  );
};

export default DrugNav;
