  import {useState} from "react";
  import DrugNav from "../drug_nav/DrugNav";
  import Drug_footer from "../drug_footer/Drug_footer";
  import "./create_rxgroup.css";

  const Create_rxGroup = ({ name,setPopActive,setRxgroupName }) => {
    const [groupName, setGroupName] = useState("");
      
      
      
    const handleInputChange = (e) => {
      setGroupName(e.target.value);
       
    };

    return (
      <>
        <div className="create_rx_group_bg">
       
          <div className="create_rxgroup_wrapper">
            <DrugNav name={name} setPopActive={setPopActive}/>
            <div className="create_rxgroup_body">
              <p>RX Group Name</p>
              <input
                type="text"
                placeholder="Group Name"
                value={groupName}
                onChange={handleInputChange}

              />
            </div>
            <Drug_footer  setPopActive={setPopActive}  value={groupName} setRxgroupName={setRxgroupName}/>
          </div>
        </div>
      </>
    );
  };

  export default Create_rxGroup;
