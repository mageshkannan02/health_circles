import React, { useEffect, useState } from "react";
import "./rx_group._list.css";
import addicon from "../../assets/icons8-add.svg";
import renameicon from "../../assets/icons8-rename.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CustomizedSwitches from "../toggle/Toggle";
import Create_rxGroup from '../create_rxGroup/Create_rxGroup'
import {useSelector} from 'react-redux'

const RxgroupList = ({ setIsList=()=>{}, rxgroups,setSelectedrxgroupId ,setRxgroupName,setrxgroupId}) => {
  useEffect(()=>{
    setAllrxgroups(rxgroups)
  },[rxgroups])
  const rxgroupslist=useSelector((state)=>state.medical.rxGroups)
  const [filteredrxgroups, setfilteredrxgroups] = useState("");
       const [rxpopactive,setRxpopActive]=useState(false)
  const [allrxgroups, setAllrxgroups] = useState([]);
  const [addrx,setAddrx]=useState(false)
  const [renamerx,setRenameRx]=useState(false)
  const [renamedname,setrenamedName]=useState("")
  const handlesearchrxGroups = (e) => {
    setfilteredrxgroups(e.target.value);
  };
 const [rxgroupname,setgroupName]=useState(null)

  const filteredText = allrxgroups.filter((group) =>
    group.name.toLowerCase().includes(filteredrxgroups.toLowerCase())
  );
   
  const selectedRxgroup=(group)=>{
   setSelectedrxgroupId(group.id)
   setrxgroupId(group.id)
   setgroupName(group.name)
   setRxpopActive(true)
   
  }
    
  
  
     
 
  
  const active=()=>{
    setIsList(true)
    setAddrx(true)
  }
   
   
   const handleRename=(group)=>{
    setRenameRx(true)
    setrenamedName(group.id)
   }
  
  return (
    <>
      <div className="rx_group_list_wrapper">
        <div className="head">
          <h5>Rx Group</h5>
          <img src={addicon} alt="" onClick={active} />
        </div>
        <div className="search-input">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
          <input
            type="text"
            placeholder="Search"
            onChange={handlesearchrxGroups}
          />
        </div>
        {filteredText &&
          filteredText.map((group) => {
            const {drugs}=group;
            
            return (
              <>
                <div
                  className={`group-div ${rxgroupname===group.name && rxpopactive?"active":""}`}
                  key={group.id}
                  onClick={()=>selectedRxgroup(group)}
                >
                  <h6 className={`${rxgroupname===group.name && rxpopactive?"active_text":""}`}>
                    {group.name}
                    <br /> <span>{drugs.length} Drugs</span>
                  </h6>
                  <div className="toggle">
                    <img src={renameicon} alt="" onClick={()=>handleRename(group)}/>
                    <CustomizedSwitches />
                  </div>
                </div>
                <p className="line"></p>
              </>
            );
          })}
         
      </div>
      {
            addrx && <Create_rxGroup name={"CREATE RX GROUP"} setAddrx={setAddrx} setRxgroupName={setRxgroupName} />
          }
          {
                        (renamerx && !addrx) && <Create_rxGroup name={"REANME RX GROUP"} setRenameRx={setRenameRx} renamedname={renamedname} setRxgroupName={setRxgroupName}/>

          }
          
    </>
  );
};

export default RxgroupList;
