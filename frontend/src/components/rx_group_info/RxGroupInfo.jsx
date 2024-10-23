import React, { useEffect, useState } from "react";
import trash from "../../assets/icons8-trash.svg";
import edit from "../../assets/icons8-edit.svg";
import "./rx_group_info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const RxGroupInfo = ({ setCreateRx, setAddDrug, selectedrxgroupId }) => {
  const [rxGroupInfo, setRxGroupInfo] = useState([]);
  const base_url = "http://localhost:4000/health";

  useEffect(() => {
    const getrxgroup = async () => {
      try {
        const data = await axios.get(`${base_url}/specificrxgroups`, {
          params: {
            rxgroupid: selectedrxgroupId,
          },
        });
        const respone = Array.isArray(data.data) ? data.data : [data.data];
        setRxGroupInfo(respone);
      } catch (error) {
        console.log(error);
      }
    };
    getrxgroup();
  }, [selectedrxgroupId]);
   

  return (
    <>
      {rxGroupInfo.map((group) => {
        const { drugs } = group;
        if(drugs.length<=0){
          return (
            <div className="rx_group_info_wrapper" key={group.id}>
              <h4>{group.name}</h4>
              <div className="info_div">
                <p>ADDED DRUGS</p>
                <div className="list-div">
                  <div className="rows-div">
                     <p className="no-drugs">No drugs Available</p>
                  </div>
                </div>
                <div className="add_button">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ color: "#ffffff" }}
                    className="plus"
                    onClick={() => setAddDrug(true)}
                  />{" "}
                  <h6>Add Drugs</h6>
                </div>
              </div>
              
            </div>
          );
        }
        else{
          return (
            <div className="rx_group_info_wrapper" key={group.id}>
              <h4>{group.name}</h4>
              <div className="info_div">
                <p>ADDED DRUGS</p>
                <div className="list-div">
                  <div className="rows-div">
                    {drugs.map((drug) => (
                      <div className="list-row" key={drug.id}>
                        <ul>
                          <li>{drug.name}</li>
                        </ul>
                        <div className="drug_info">
                          <p>0 -0 -1</p>
                          <p>10 mins - After Food</p>
                          <p>Alternate Day for 67 Day(s)</p>
                          <p className="qty"> 1 Qty</p>
                          <img src={trash} alt="" className="trash" />
                          <img src={edit} alt="" className="edit" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="add_button">
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ color: "#ffffff" }}
                    className="plus"
                    onClick={() => setAddDrug(true)}
                  />{" "}
                  <h6>Add Drugs</h6>
                </div>
              </div>
             
            </div>
          );
        }
       
      })}
    </>
  );
};

export default RxGroupInfo;
