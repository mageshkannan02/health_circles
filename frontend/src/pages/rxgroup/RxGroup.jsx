import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRxGroups } from "../../slices/ApiSlice";
import RxGroup_nav from "../../components/rx_group_nav/RxGroup_nav";
import "./rxgroup.css";
import RxgroupList from "../../components/rxgroup_list/RxgroupList";
import RxGroupInfo from "../../components/rx_group_info/RxGroupInfo";
import Rxgroup_empty from "../../components/empty/Rxgroup_empty";
import AddRxgroups from "../../components/add_rxgroups/AddRxgroups";

const RxGroup = () => {
  const [rxlist,setRxlist]=useState(false)
  const [rxgroupanme,setRxgroupName]=useState(null)
console.log(rxlist);

 useEffect(()=>{
  if(rxgroupanme!==null){
setRxlist(true)

  }
 },[rxgroupanme])
    

  return (
    <div className="rx_group_wrapper container-md col-8">
        
        {
            rxlist ?(
              <>
 <RxGroup_nav />
 <div className="rx_group_body">
 
 <RxgroupList />
            <RxGroupInfo />
 </div>
            </>
            ) :(
              <>
              <RxGroup_nav />
              <Rxgroup_empty  setRxgroupName={setRxgroupName} />
              </>
              
            )
        }
          
            
          
        
        
    </div>
  );
};
 

export default RxGroup;
