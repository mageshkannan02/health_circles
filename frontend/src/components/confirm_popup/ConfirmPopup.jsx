import React from 'react'
import './confirm_popup.css'

const ConfirmPopup = () => {
  return (
    <>
    <div className="confirm-background">

      <div className="confirm_wrapper">
          <h4>Are you sure?</h4>
          <p className='info'>Do you want to IN-ACTIVE Rx <br />
          Group: Group name 1 </p>
          
          <div className="confirm_buttons">
            <button className='cancel'>CANCEL</button>
            <button className='button-inactive'>INACTIVE</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ConfirmPopup