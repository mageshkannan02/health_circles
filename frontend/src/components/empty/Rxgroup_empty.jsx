import React from 'react'
import rxgroup from '../../assets/Group 105630.svg'
import addicon from '../../assets/icons8-add.svg'
import './rxgroup_empty.css'
import RxGroup_nav from '../rx_group_nav/RxGroup_nav'

const Rxgroup_empty = ({setempty}) => {
  return (
    <>
    <div className='rx_group_wrapper container-md col-8'>
      
         <div className="rx_group_empty_wrapper">
         <img src={rxgroup} alt="" />
      <p>Create a group of drugs to provide prescription easily  during consultation</p>

      <div className="button-wrapper" onClick={()=>setempty(false)}>
            <img src={addicon} alt="" />
            <p>Add Rx Group</p>
      </div>
         </div>
      
     
    </div>

    </>
  )
}

export default Rxgroup_empty
