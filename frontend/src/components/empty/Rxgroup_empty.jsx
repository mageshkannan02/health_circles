import React from 'react'
import rxgroup from '../../assets/Group 105630.svg'
import addicon from '../../assets/icons8-add.svg'

const Rxgroup_empty = () => {
  return (
    <>
    <div className='rx_group_wrapper'>
      <img src={rxgroup} alt="" />
      <p>Create a group of drugs to provide prescription easily  during consultation</p>

      <div className="button-wrapper">
            <img src={addicon} alt="" />
            <p>Add Rx Group</p>
      </div>
    </div>

    </>
  )
}

export default Rxgroup_empty
