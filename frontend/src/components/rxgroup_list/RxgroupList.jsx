import React from 'react'
import './rx_group._list.css'
import addicon from '../../assets/icons8-add.svg'
import renameicon from '../../assets/icons8-rename.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import CustomizedSwitches from '../toggle/Toggle'
const RxgroupList = ({setcreaterx}) => {
  return (
     <>
     <div className="rx_group_list_wrapper">
        <div className="head">
            <h5>Rx Group</h5>
            <img src={addicon} alt=""  onClick={()=>setcreaterx(true)}/>

        </div>
         <div className="search-input">
         <FontAwesomeIcon icon={faMagnifyingGlass}   className='search' />
            <input type="text" placeholder='Search'/>
         </div>
         <div className="group-div">
             <h6 className='active'>Group name 1 <br /> <span>04 Drugs</span></h6>
             <div className="toggle">

             <img src={renameicon} alt="" />
               <CustomizedSwitches />
             </div>
            
         </div>
         <p className='line'></p>
     </div>
     </>
  )
}

export default RxgroupList
