import React from "react";
import "./drug_footer.css";
 

const Drug_footer = ({ cancel,setPopActive=()=>{},value,setRxgroupName=()=>{},setAddrx=()=>{},handleSenddoses=()=>{},setIsdose=()=>{} ,sendduration=()=>{},setFrequency=()=>{},setDuration=()=>{},saveConfiguration=()=>{},sendupdateddose=()=>{}}) => {
  const handlesendrxgroupName=()=>{
    sendupdateddose()
    saveConfiguration()
    handleSenddoses()
    sendduration()
    setFrequency(false)
    setDuration(false)
    setIsdose(false)
    if(!value){
      setPopActive(true)
      setAddrx(true)
    }
    else{

      setPopActive(false)
      setRxgroupName(value);
      setAddrx(false)
    }

  }
  return (
    <>
      <div className="drug_footer">
        {cancel === "true" && <button className="cancel">CANCEL</button>}

        <button onClick={handlesendrxgroupName} className="save">SAVE</button>
      </div>
    </>
  );
};

export default Drug_footer;
