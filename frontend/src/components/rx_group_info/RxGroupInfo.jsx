import React from 'react'
import trash from '../../assets/icons8-trash.svg'
import edit from '../../assets/icons8-edit.svg'

const RxGroupInfo = () => {
  return (
     <>
     <div className="rx_group_info_wrapper">

       <h4>Group name 2</h4>
       <div className="info_div">
           <p>ADDED DRUGS</p>
           <div className="list-div">
                 <div className="list-row">
                     <ul>
                        <li>T.Razo 20mg</li>
                     </ul>
                     <div className="drug_info">
                        <p>0 -0 -1</p>
                        <p>10 mins - After Food</p>
                        <p>Alternate Day for 67 Day(s)</p>
                        <p> 1 Qty</p>
                        <img src={trash} alt="" />
                        <img src={edit} alt="" />


                     </div>
                 </div>
           </div>
           <div className="add_button">
            <p>+</p>
            <h6>Add Drugs</h6>
           </div>
       </div>
     </div>
     </>
  )
}

export default RxGroupInfo
