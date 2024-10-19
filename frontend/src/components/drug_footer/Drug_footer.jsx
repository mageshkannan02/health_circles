import React from "react";
import "./drug_footer.css";

const Drug_footer = ({ cancel,setPopActive,value,setRxgroupName }) => {
  const handlesendrxgroupName=()=>{
    if(!value){
      setPopActive(true)
    }
    else{

      setPopActive(false)
      setRxgroupName(value);
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
