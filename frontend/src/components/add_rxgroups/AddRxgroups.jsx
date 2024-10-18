import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrugs } from '../../slices/ApiSlice';  
import leftarrow from '../../assets/Group 9.svg';
import trash from '../../assets/icons8-trash.svg';
import './add_rxgroup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
 

const AddRxgroups = ({ setcreaterx }) => {
  const dispatch = useDispatch();
  const  drugs= useSelector((state) => state.medical.drugs);
     console.log(drugs);
     
  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

  return (
    <>
      <div className="add_rxgroup_wrapper">
        <div className="add_rxgroup_nav">
          <h5>
            <img src={leftarrow} alt="" onClick={() => setcreaterx(false)} /> Rx group name - Add drugs
          </h5>
          <button>Save</button>
        </div>
        <div className="search-items">
          <input type="text" placeholder="Search drugs" />
          <ul>
            <li  >All</li>
            <li className='active_select'>Drugs</li>
            <li>Rx Group</li>
          </ul>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000" }} className="drug_search" />
          
        </div>
        {/* <div className="drug_show">
            
             
              <ul>
                {drugs.map((drug) => (
                  <li key={drug.id}>  {drug.name}</li>
                ))}
              </ul>
            
          </div> */}
        <p>Selected drugs (3)</p>
        <div className="title">
          <table>
            <thead>
              <tr>
                <td>Drug Name</td>
                <td>Dose</td>
                <td>Time, Frequency & When</td>
                <td>Duration & Quantity</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paracetamol 250mg</td>
                <td>1- 0 - 1 {'>'}</td>
                <td style={{marginLeft:'50px'}}>5 min, Daily, Before food {'>'}</td>
                <td style={{marginLeft:'80px'}}>+ Customize {'>'}</td>
                <td>
                  <img src={trash} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddRxgroups;
