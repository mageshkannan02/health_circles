import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const DrugNav = () => {
  return (
    <>
      <div className="drug_nav">
        <p>Dose</p>
        <i><FontAwesomeIcon icon={faXmark} style={{color: "#000000",}} /></i>

      </div>
    </>
  );
};

export default DrugNav;
