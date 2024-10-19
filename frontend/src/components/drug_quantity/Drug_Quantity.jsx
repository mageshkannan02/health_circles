import React from "react";
import "./drug_quantity.css";
import DrugNav from "../../components/drug_nav/DrugNav";
import Drug_footer from "../../components/drug_footer/Drug_footer";
import customadd from '../../assets/icons8-add-50.svg'
import customsub from '../../assets/icons8-sub-50 (1).svg'

const Drug_Quantity = () => {
  const daysList = [];
  for (let i = 0; i < 7; i++) {
    daysList.push(<li key={i}>{i}</li>);
  }

  return (
    <>
      <div className="drug_quantity_wrapper">
        <div className="drug_quantity_body">
          <DrugNav name={"Duration & Qty"} />

          <p>Duration</p>
          <div className="days">
         
            <ul>{daysList}</ul>
            <div className="days_filter">
              <p className="days_line"></p>
              <button className="days_active">Days</button>
              <button>Week</button>
              <button>Month</button>
            </div> 
          </div>
          <div className="custom_qty">
            <p>Custom</p>
            <div className="custom_count">
              <img src={customsub} alt="" />
              <p>7</p>
              <img src={customadd} alt="" />
            </div>
          </div>
          <div className="qty">
            <p>Qty</p>
            <div className="qty_count">
              <h6>4</h6>
              <p>nos</p>
            </div>
          </div>
          <Drug_footer cancel={"true"} />
        </div>
      </div>
    </>
  );
};

export default Drug_Quantity;
