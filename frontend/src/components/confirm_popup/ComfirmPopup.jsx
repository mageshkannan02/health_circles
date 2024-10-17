import React from 'react'

const ComfirmPopup = () => {
  return (
    <>
      <div className="confirm_wrapper">
          <p>Are you sure?</p>
          <p>Do you want to IN-ACTIVE Rx</p>
          <p>Group:name 1</p>
          <div className="confirm_buttons">
            <button>CANCEL</button>
            <button>INACTIVE</button>
          </div>
      </div>
    </>
  )
}

export default ComfirmPopup