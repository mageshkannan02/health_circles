import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrugs } from "../../slices/ApiSlice";
import leftarrow from "../../assets/Group 9.svg";
import trash from "../../assets/icons8-trash.svg";
import "./add_rxgroup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DrugTiming from "../drug_timing/DrugTiming";
import DrugFrequency from "../drug_frequency/DrugFrequency";
import Drug_Quantity from "../drug_quantity/Drug_Quantity";
import axios from "axios";
 

const AddRxgroups = ({ setAddDrug ,rxgroupId}) => {
  const alldata=useSelector((state)=>state.medical.drugConfigs)
 
   
   
  
  const [isDrugShow, setisdrugShow] = useState(false);
  const [drugname, setDrugname] = useState("");
  const [popActive,setPopActive]=useState(false)
   const [isDose, setIsdose] = useState(false);
  const [defaultdrugs, setDefaultdrugs] = useState([]);
  const [isFrequency, setFrequency] = useState(false);
  const [isDuration, setDuration] = useState(false);
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [selectedDose, setSelctedDose] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState(   []);
  const [selectedparandial, setSelectedPrandial] = useState(  []);
  const [selectedDuration, setSelectedDuration] = useState(  []);
  const [selectedTiming, setSelectedTiming] = useState([]);
  const [freq, setfreq] = useState("");

   
   
  useEffect(() => {
    let dataToMap = Array.isArray(alldata) ? alldata : Object.values(alldata);
  
     
    setSelectedFrequency([]); 
    setSelectedTiming([]);
    setSelectedPrandial([]);
    setSelctedDose([])
    setSelectedDuration([])
    dataToMap.forEach((data) => {
      const { frequency, timing, prandial,dose,duration } = data;
  
       
      setSelectedFrequency((prevFrequency) => {
        const newFrequency = Array.isArray(frequency) ? frequency : [frequency];
        return [...new Set([...prevFrequency, ...newFrequency])];  
      });
  
      setSelectedTiming((prevTiming) => {
        const newTiming = Array.isArray(timing) ? timing : [timing];
        return [...new Set([...prevTiming, ...newTiming])];  
      });
  
      setSelectedPrandial((prevPrandial) => {
        const newPrandial = Array.isArray(prandial) ? prandial : [prandial];
        return [...new Set([...prevPrandial, ...newPrandial])];  
      });
      setSelctedDose((prevDose)=>{
        const newDose=Array.isArray(dose)?dose:[dose]
        return [...new Set([...prevDose,...newDose])]
      })
      setSelectedDuration((prevduration)=>{
        const newDuration=Array.isArray(duration)?duration:[duration]
        return [...new Set([...prevduration,...newDuration])]
      })
    });
   
  }, [alldata]);
  

  
 
 
   
   
  
 const handleSubmit = async () => {
  const payload = {
    rxgroupId:rxgroupId,
    Alldrugs: Object.values(selectedDrugs).map((drug) => ({
      id: drug.id,
      doses: selectedDose
        .filter((dose) => dose.drugId === drug.id)
        .map((dose) => ({
          id: dose.id,
        })),
      frequencies: selectedFrequency
        .filter((freq) => freq.drugId === drug.id)
        .map((freq) => ({
          id: freq.id,
        })),
      prandials: selectedparandial
        .filter((prandial) => prandial.drugId === drug.id)
        .map((prandial) => ({
          id: prandial.id,
        })),
      timings: selectedTiming
        .filter((timing) => timing.drugId === drug.id)
        .map((timing) => ({
          id: timing.id,
        })),
      durations: selectedDuration
        .filter((duration) => duration.drugId === drug.id)
        .map((duration) => ({
          id: duration.id,
        })),
    })),
  };
  console.log(payload);
  
    try {
      const data=await axios.post("http://localhost:4000/health/addrxgroupsdrugs",payload)
      res.send("data sent successfully")
    
    } catch (error) {
       console.log(error);
       
    }
};
 
  

  const dispatch = useDispatch();
  const drugs = useSelector((state) => state.medical.drugs);

  const [morning, setMorning] = useState(0);
  const [afternoon, setAfterNoon] = useState(0);
  const [evening, setEvening] = useState(0);
  const [specificDrug, setSpecificDrug] = useState("");
   
  
  useEffect(() => {
    const updatedDrugs = selectedDrugs.map((drug) => {
      let newMorning = drug.morning || 0;
      let newAfternoon = drug.afternoon || 0;
      let newEvening = drug.evening || 0;
  
      selectedDose.forEach((dose) => {
        if ( dose.drugId === drug.id) {
          
          if (dose.id === 1 && drug.bool) {
            newMorning = 1;
          } else if(dose.id === 1 && !drug.bool){
               newMorning=0;
          }
          else if (dose.id === 2) {
            newAfternoon = 1;
          }
          else if(dose.id === 2 && !drug.bool){
                 newAfternoon=0;
          } else if (dose.id === 3) {
            newEvening = 1;
          }
          else{
            newMorning=0;
            newEvening=0;
            newAfternoon=0;
          }
        }
      });
  
       
      return {
        ...drug,
        morning: newMorning,
        afternoon: newAfternoon,
        evening: newEvening,
      };
    });
  
    setSelectedDrugs(updatedDrugs);  
  }, [selectedDose, selectedDrugs]);
  
  
  console.log(selectedDrugs,"seelcted");
  
  
  
  
  

  const drugShowRef = useRef();
  const [activename,setActiveName]=useState("all")
  useEffect(() => {
    if (!Array.isArray(selectedDose)) {
      setSelctedDose([selectedDose]);
    } else {
      setSelctedDose(selectedDose);
    }
  }, [selectedDose]);
  useEffect(() => {
    setDefaultdrugs(drugs);
  }, [drugs]);

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

  const doseActice = () => {
    setIsdose(true);
  };
  const frequencyActive = () => {
    setFrequency(true);
  };
  const durationActive = () => {
    setDuration(true);
  };

  const handleActiveDrugshow = () => {
    setisdrugShow(true);
  };

  const handleInactivedrugShow = (e) => {
    if (drugShowRef.current && drugShowRef.current.contains(e.relatedTarget)) {
      return;
    }
    setTimeout(() => {
      setisdrugShow(false);
    }, 200);
  };

  const handledrugname = (e) => {
    setDrugname(e.target.value);
  };

  const filtereddrugs = defaultdrugs.filter((drug) => {
    return drug.name.toLowerCase().includes(drugname.toLowerCase());
  });

  const handleSelectedDrugs = (drug) => {
    setSelectedDrugs((prev) => [...prev, drug]);
    const selecteddrug = defaultdrugs.filter((item) => item.id !== drug.id);
    setDefaultdrugs(selecteddrug);
    setisdrugShow(false);
    setSpecificDrug(drug.id);
  };

  const deleteselectedDrug = (drug) => {
    const filtereddrugs = selectedDrugs.filter((item) => item.id !== drug.id);
    setSelectedDrugs(filtereddrugs);
    setDefaultdrugs((item) => [...item, drug]);
  };
  const SendrxgroupswithDrugs = () => {};
  const handleActive=(name)=>{
    if(name==="all"){
    setPopActive(true)
    setActiveName(name)
  }
  else if(name==="drug"){
    setPopActive(true)
    setActiveName(name)
  }
  else if(name==="group"){
    setActiveName(name)
  }
  else{
    setPopActive(false)
    setActiveName("all")
  }
}

  return (
    <>
      <div className="add_rxgroup_wrapper container-md col-8">
        <div className="add_rxgroup_nav">
          <h5>
            <img src={leftarrow} alt="" onClick={() => setAddDrug(false)} /> Rx
            group name - Add drugs
          </h5>
          <button onClick={handleSubmit}>Save</button>
        </div>
        <div className="search-items">
          <input
            type="text"
            placeholder="Search drugs"
            value={drugname}
            onFocus={handleActiveDrugshow}
            onBlur={handleInactivedrugShow}
            onChange={(e) => handledrugname(e)}
          />
          <ul>
            <li onClick={()=>handleActive("all")} className={ activename==="all"?"active_select":""}>All</li>
            <li onClick={()=>handleActive("drug")} className={  activename==="drug"?"active_select":""}>Drugs</li>
            <li onClick={()=>handleActive("group")} className={  activename==="group"?"active_select":""}>Rx Group</li>
          </ul>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
            className="drug_search"
          />
        </div>
        {isDrugShow && (
          <div className="drug_show" ref={drugShowRef}>
            <ul>
             
              {filtereddrugs.map((drug) => (
                <li key={drug.id} onMouseDown={() => handleSelectedDrugs(drug)}>
                  <span>{drug.drug_catagery.name} -</span> {drug.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p>Selected drugs ({selectedDrugs.length})</p>
        <div className="title">
          <table>
            <thead>
              <tr>
                <td>Drug Name</td>
                <td>Dose</td>
                <td>Time, Frequency & When</td>
                <td>Duration & Quantity</td>
              </tr>
            </thead>
            <tbody>
            {selectedDrugs &&
  selectedDrugs.map((drug) => {
    return (
      <tr key={drug.id}>
        <td className="drug_name">{drug.name}</td>

        <td>
          {drug.morning} - {drug.afternoon} - {drug.evening}
          <span onClick={doseActice}>{">"}</span>
        </td>

        <td>
          5 min, Daily, Before food{" "}
          <span onClick={frequencyActive}>{">"}</span>
        </td>
        <td>
          <span onClick={durationActive}>+ Customize {">"}</span>
        </td>
        <td className="trash_bin">
          <img
            src={trash}
            alt="Delete"
            onClick={() => deleteselectedDrug(drug)}
          />
        </td>
      </tr>
    );
  })}

            </tbody>
          </table>
        </div>
      </div>
      {isDose && (
        <DrugTiming
          setIsdose={setIsdose}
          setSelctedDose={setSelctedDose}
          specificDrug={specificDrug}  
        />
      )}
      {isFrequency && (
        <DrugFrequency
          setFrequency={setFrequency}
          setSelectedFrequency={setSelectedFrequency}
          setSelectedPrandial={setSelectedPrandial}
          setSelectedTiming={setSelectedTiming}
          specificDrug={specificDrug}
        />
      )}
      {isDuration && (
        <Drug_Quantity
          setDuration={setDuration}
          setSelectedDuration={setSelectedDuration}
          specificDrug={specificDrug}
        />
      )}
    </>
  );
};

export default AddRxgroups;
