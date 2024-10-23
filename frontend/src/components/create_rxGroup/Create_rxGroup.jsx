  import {useState} from "react";
  import DrugNav from "../drug_nav/DrugNav";
  import Drug_footer from "../drug_footer/Drug_footer";
  import "./create_rxgroup.css";
  import {useSelector}  from 'react-redux'

  const Create_rxGroup = ({ name,setPopActive,setRxgroupName ,setAddrx,renamedname}) => {
    const rxgroups=useSelector((state)=>state.medical.rxGroups)
    console.log(rxgroups);
    
    const [groupName, setGroupName] = useState("");
      console.log(groupName);
      
      
    const handleInputChange = (e) => {
        setGroupName(e.target.value);
     
     
       
    };

    return (
      <>
        <div className="create_rx_group_bg">
       
          <div className="create_rxgroup_wrapper">
            <DrugNav name={name} setPopActive={setPopActive} setAddrx={setAddrx}/>
            <div className="create_rxgroup_body">
              <p>RX Group Name</p>
              <input
                type="text"
                placeholder="Group Name"
                 
                onChange={handleInputChange}

              />
            </div>
            <Drug_footer  setPopActive={setPopActive} value={groupName} setAddrx={setAddrx}   setRxgroupName={setRxgroupName}/>
          </div>
        </div>
      </>
    );
  };

  export default Create_rxGroup;
