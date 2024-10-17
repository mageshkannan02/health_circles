import React from 'react'
import leftarrow from '../../assets/Group 9.svg'
import trash from '../../assets/icons8-trash.svg'

const AddRxgroups = () => {
  return (
    <>
      <div className="add_rxgroup_wrapper">
          <div className="add_rxgroup_nav">
            <h5><img src={leftarrow} alt="" /> Rx group name -Add drugs</h5>
            <button>Save</button>
          </div>
          <div className="search-items">
            <input type="text" name="" id="" placeholder='Search drugs' />
            <ul>
              <li>All</li>
              <li>Drugs</li>
              <li>Rx Group</li>
            </ul>
            <p>Search</p>

          </div>
          <p>Selected drugs (3)</p>
          <div className="title">
            <table>
                <tr>
                  <td>
                    Drug Name
                  </td>
                  <td>
                    Dose
                  </td>
                  <td>
                    Time,Frequency & When
                  </td>
                  <td>
                    Duration & Quantity
                  </td>
                </tr>
                <tr>
                  <td>Paracetamol 250mg</td>
                  <td>1- 0 - 1 {'>'}</td>
                </tr>
                <tr>
                  5 min, Daily,Before food {'>'}
                </tr>
                <tr>
                  + Customize {'>'}
                </tr>
                 <tr><img src={trash} alt="" /></tr>
            </table>

          </div>
      </div> 
    </>
  )
}

export default AddRxgroups
