import React from 'react'
import './rx_group._list.css'
import addicon from '../../assets/icons8-add.svg'
import renameicon from '../../assets/icons8-rename.svg'

const RxgroupList = () => {
  return (
     <>
     <div className="rx_group_wrapper">
        <div className="head">
            <h5>Rx Group</h5>
            <img src={addicon} alt="" />

        </div>
         <div className="search-input">
            <p>search</p>
            <input type="text" placeholder='Search'/>
         </div>
         <div className="group-div">
             <h6>Group name 1 <br /> <span>04 Drugs</span></h6>
             <img src={renameicon} alt="" />
             <p>toggle</p>
         </div>
     </div>
     </>
  )
}

export default RxgroupList
