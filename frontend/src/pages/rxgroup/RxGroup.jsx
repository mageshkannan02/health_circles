import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRxGroups } from "../../slices/ApiSlice";
import RxGroup_nav from "../../components/rx_group_nav/RxGroup_nav";
import "./rxgroup.css";
import RxgroupList from "../../components/rxgroup_list/RxgroupList";
import RxGroupInfo from "../../components/rx_group_info/RxGroupInfo";
import Rxgroup_empty from "../../components/empty/Rxgroup_empty";
import AddRxgroups from "../../components/add_rxgroups/AddRxgroups";
import axios from "axios";

const RxGroup = () => {
  const baseurl = "http://localhost:4000/health";
  const [rxlist, setRxlist] = useState(false);
  const [addDrug, setAddDrug] = useState(false);
  const [selectedrxgroupId, setSelectedrxgroupId] = useState("");

  const [rxgroupname, setRxgroupName] = useState(null);
  const [rxgroupId,setrxgroupId]=useState(null)

  const dispath = useDispatch();
  const rxgroups = useSelector((state) => state.medical.rxGroups);

  useEffect(() => {
    dispath(fetchRxGroups());
  },[dispath,rxgroupname]);

  useEffect(() => {
    if (rxgroupname !== null) {
      setRxlist(true);

      const postrxgroup = async () => {
        try {
          const data = await axios.post(`${baseurl}/addrxgroups`, {
            name: rxgroupname,
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      postrxgroup();
    }
  }, [rxgroupname]);

  return (
    <div className="rx_group_wrapper container-md col-8">
      {rxgroups.length > 0 && !addDrug ? (
        <>
          <RxGroup_nav />
          <div className="rx_group_body">
            <RxgroupList
              rxgroups={rxgroups} setrxgroupId={setrxgroupId}
              setSelectedrxgroupId={setSelectedrxgroupId}
              setRxgroupName={setRxgroupName} selectedrxgroupId={selectedrxgroupId}
            />
            <RxGroupInfo
              setAddDrug={setAddDrug}
              selectedrxgroupId={selectedrxgroupId}
            />
          </div>
        </>
      ) : addDrug ? (
        <AddRxgroups setAddDrug={setAddDrug} rxgroupId={rxgroupId}/>
      ) : (
        <>
          <RxGroup_nav />
          <Rxgroup_empty setRxgroupName={setRxgroupName} />
        </>
      )}
    </div>
  );
};

export default RxGroup;
