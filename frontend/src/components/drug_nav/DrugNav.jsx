import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './drug_nav.css'

const DrugNav = ({name,setPopActive}) => {
  return (
    <>
      <div className="drug_nav">
        <p>{name}</p>
        <i><FontAwesomeIcon icon={faXmark} onClick={()=>setPopActive(false)}  /></i>

      </div>
    </>
  );
};

export default DrugNav;
