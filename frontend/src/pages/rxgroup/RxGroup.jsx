import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRxGroups } from '../../slices/ApiSlice';  
import RxGroup_nav from '../../components/rx_group_nav/RxGroup_nav';
import './rxgroup.css';
import RxgroupList from '../../components/rxgroup_list/RxgroupList';
import RxGroupInfo from '../../components/rx_group_info/RxGroupInfo';
import Rxgroup_empty from '../../components/empty/Rxgroup_empty' 
import Create_rxGroup from '../../components/create_rxGroup/Create_rxGroup';
import AddRxgroups from '../../components/add_rxgroups/AddRxgroups'
 

const RxGroup = () => {
  const [empty,setempty]=useState(true)
  const [isList,setisList]=useState(false)
  const [createrx,setcreaterx]=useState(false)
  const [rxGroupName, setRxGroupName] = useState('');
  const handleGroupNameChange = (name) => {
    setRxGroupName(name);  
  };
console.log(rxGroupName);

  console.log(createrx);
  useEffect(()=>{

    if(createrx){
      setisList(false)
    }
    else if(!createrx && !empty){
      setisList(true)
    }
  },[createrx,isList])
  const dispatch = useDispatch();
  
  const  rxGroups= useSelector((state) => state.medical.rxGroups);
  console.log(rxGroups);
  
  
  useEffect(() => {
   
      dispatch(fetchRxGroups());
    
  }, [dispatch]);

  return (
    <>
    <div className="rx_group_wrapper container-md col-8">
 

  {
    empty ? (
      <>
       <RxGroup_nav />
        <Rxgroup_empty setempty={setempty} />
      </>
    ) : isList ? (
      <>
       <RxGroup_nav />
      <div className="rx_group_body">
         
        <RxgroupList rxGroups={rxGroups}  setcreaterx={setcreaterx}/>
        <RxGroupInfo />
      </div>
      </>
    ) : createrx ?(
      <AddRxgroups  setcreaterx={setcreaterx}/>
    ):
     (
      <>
       <RxGroup_nav />
        <Rxgroup_empty setempty={setempty}/>
        <Create_rxGroup setisList={setisList} onGroupNameChange={handleGroupNameChange} />
      </>
    )
  }

  {/* <AddRxgroups /> */}
</div>

      </>
  );
};
{/* <div className="rx_group_body">
          
          
          
          <RxgroupList rxGroups={rxGroups} />
          <RxGroupInfo />
        </div>   */}
export default RxGroup;
