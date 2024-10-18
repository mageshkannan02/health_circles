import React from 'react'
import './drug_footer.css'

const Drug_footer = ({setisList}) => {
  return (
    <>
    <div className="drug_footer">
        {/* <button>CANCEL</button> */}
        <button onClick={()=>setisList(true)}>SAVE</button>
    </div>
    </>
  )
}

export default Drug_footer