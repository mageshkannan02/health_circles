import React from 'react'
import './drug_timing.css'
import DrugNav from '../../components/drug_nav/DrugNav'
import Drug_footer from '../../components/drug_footer/Drug_footer'
 
const DrugTiming = () => {
  return (
    <>
    <div className="drug_timing_wrapper">
        <div className="timing_popup">
        <DrugNav  name={"Dose"}/>
            <div className="timing_body">
                
                 <div className="prandial_div">
                       <p>Morning</p>
                       <div className="prandial_selection_div">
                        <p>0</p>
                        <p>1</p>
                       </div>
                 </div>
                 <div className="prandial_div">
                       <p>Afternoon</p>
                       <div className="prandial_selection_div">
                        <p>0</p>
                        <p>1</p>
                       </div>
                 </div>
                 <div className="prandial_div" style={{border:'none'}}>
                       <p>Night</p>
                       <div className="prandial_selection_div">
                        <p>0</p>
                        <p>1</p>
                       </div>
                 </div>
            </div>
            <Drug_footer cancel={"true"} />
            
        </div>
    </div>
    </>
  )
}

export default DrugTiming