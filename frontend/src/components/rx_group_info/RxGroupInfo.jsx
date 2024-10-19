import React from 'react'
import trash from '../../assets/icons8-trash.svg'
import edit from '../../assets/icons8-edit.svg'
import './rx_group_info.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const RxGroupInfo = ({setCreateRx}) => {
   const active=()=>{
      setCreateRx(true)
   }
  return (
     <>
     <div className="rx_group_info_wrapper">

       <h4>Group name 2</h4>
       <div className="info_div">
           <p>ADDED DRUGS</p>
           <div className="list-div">
            <div className="rows-div">
            <div className="list-row">
                     <ul>
                        <li>T.Razo 20mg</li>
                     </ul>
                     <div className="drug_info">
                        <p>0 -0 -1</p>
                        <p>10 mins - After Food</p>
                        <p>Alternate Day for 67 Day(s)</p>
                        <p className='qty'> 1 Qty</p>
                        <img src={trash} alt="" className='trash' />
                        <img src={edit} alt="" className='edit' />


                     </div>
                 </div>
                 <div className="list-row">
                     <ul>
                        <li>T.Razo 20mg</li>
                     </ul>
                     <div className="drug_info">
                        <p>0 -0 -1</p>
                        <p>10 mins - After Food</p>
                        <p>Alternate Day for 67 Day(s)</p>
                        <p className='qty'> 1 Qty</p>
                        <img src={trash} alt="" className='trash' />
                        <img src={edit} alt="" className='edit' />


                     </div>
                 </div>
                 <div className="list-row">
                     <ul>
                        <li>T.Razo 20mg</li>
                     </ul>
                     <div className="drug_info">
                        <p>0 -0 -1</p>
                        <p>10 mins - After Food</p>
                        <p>Alternate Day for 67 Day(s)</p>
                        <p className='qty'> 1 Qty</p>
                        <img src={trash} alt="" className='trash' />
                        <img src={edit} alt="" className='edit' />


                     </div>
                 </div>
            </div>
                
                 
                
           </div>
           <div className="add_button"  >
           <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} className='plus' onClick={active}/>            <h6>Add Drugs</h6>
           </div>
       </div>
     </div>
     </>
  )
}

export default RxGroupInfo
