import React from "react";

const Drug_Quantity = () => {
    
  return (
    <>
      <div className="drug_quantity_wrapper">
        
        <div className="drug_quantity_body">
          <p>Duration</p>
          <div className="days">
             <ul>
                 <li>1</li>
             </ul>
             <div className="days_filter">
                <button>Days</button>
                <button>Week</button>
                <button>Month</button>
             </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Drug_Quantity;
