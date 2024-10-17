import React from 'react'
 
const DrugTiming = () => {
  return (
    <>
    <div className="drug_timing_wrapper">
        <div className="timing_popup">
             
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
                 <div className="prandial_div">
                       <p>Night</p>
                       <div className="prandial_selection_div">
                        <p>0</p>
                        <p>1</p>
                       </div>
                 </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default DrugTiming