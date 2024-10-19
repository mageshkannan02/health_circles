import React from 'react'
import './drug_frequency.css'
import DrugNav from '../../components/drug_nav/DrugNav'
import Drug_footer from '../../components/drug_footer/Drug_footer'
 

const DrugFrequency = () => {
  return (
     <>
     <div className="drug_frequency_wrapper">
        <div className="drug_frequency_body">
        <DrugNav  name={"Time, Frequency & When"}/>
            <div className="choose_div">
                <p>Time</p>
                <div className="choose_div_items">

                <button className='active_frequency'>Immediately</button>
                <button>10 mins</button>
                </div>
            </div>
            

            <div className="choose_div">
            <p>When</p>
            <div className="choose_div_items">
              
                <button className='active_frequency'>Before food</button>
            </div>
            </div>
            <div className="choose_div">
                <p >Frequency</p>
            <div className="choose_div_items">

                <button className='active_frequency'>Daily</button>
            </div>
            </div>  
         <Drug_footer cancel={"true"} />
        </div>
     </div>
     </>
  )
}

export default DrugFrequency