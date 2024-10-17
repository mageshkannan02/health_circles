import React from 'react'
 

const DrugFrequency = () => {
  return (
     <>
     <div className="drug_frequency_wrapper">
        
        <div className="drug_frequency_body">
            <div className="choose_div">
                <p>Time</p>
                <button>Immediately</button>
            </div>
            <div className="choose_div">
                <p>When</p>
                <button>Before food</button>
            </div>
            <div className="choose_div">
                <p>Frequency</p>
                <button>Daily</button>
            </div>
        </div>
         
     </div>
     </>
  )
}

export default DrugFrequency