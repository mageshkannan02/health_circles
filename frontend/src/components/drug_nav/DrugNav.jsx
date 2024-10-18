import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './drug_nav.css'

const DrugNav = () => {
  return (
    <>
      <div className="drug_nav">
        <p>Rename rx group</p>
        <i><FontAwesomeIcon icon={faXmark}   /></i>

      </div>
    </>
  );
};

export default DrugNav;
