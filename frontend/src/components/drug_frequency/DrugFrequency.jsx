import React, { useEffect, useState } from "react";
import "./drug_frequency.css";
import DrugNav from "../../components/drug_nav/DrugNav";
import Drug_footer from "../../components/drug_footer/Drug_footer";
import { fetchFrequency, fetchTiming, fetchPrandial, saveDrugConfiguration } from "../../slices/ApiSlice";
import { useSelector, useDispatch } from "react-redux";

const DrugFrequency = ({ setFrequency, specificDrug }) => {
  const [drugfreq, setdrugfreq] = useState([]);
  const [drugprandial, setDrugPrandial] = useState([]);
  const [drugtiming, setDrugTiming] = useState([]);
  const [freqId, setfreqId] = useState("");
  const [pranialId, setPrandialId] = useState("");
  const [timingId, setTimingId] = useState("");
  const [dose,setdose]=useState([])
  const [duration,setduration]=useState([])

  const dispatch = useDispatch();
  const frequency = useSelector((state) => state.medical.frequency);
  const timing = useSelector((state) => state.medical.timing);
  const prandial = useSelector((state) => state.medical.prandial);
  const drugConfigs = useSelector((state) => state.medical.drugConfigs);

   
  useEffect(() => {
    if (drugConfigs[specificDrug]) {
      const { frequency, timing, prandial,dose,duration } = drugConfigs[specificDrug];
      setdrugfreq(frequency || []);
      setDrugPrandial(prandial || []);
      setDrugTiming(timing || []);
      setdose(dose || [])
      setduration(duration || [])
      
    }
  }, [specificDrug, drugConfigs]);

   
  useEffect(() => {
    dispatch(fetchFrequency());
    dispatch(fetchTiming());
    dispatch(fetchPrandial());
  }, [dispatch]);

   
  const handleFrequency = (Id, bool) => {
    setfreqId(Id);
    setdrugfreq((prevFreq) => {
      const existsFrequency = prevFreq.find((freq) => freq.id === Id);
      const updatedFreq = existsFrequency
        ? prevFreq.map((item) =>
            item.id === Id
              ? { ...item, bool: bool ? !item.bool : item.bool, drugId: specificDrug }
              : item
          )
        : [...prevFreq, { id: Id, bool, drugId: specificDrug }];
      return updatedFreq;
    });
  };

  const handlePrandial = (Id, bool) => {
    setPrandialId(Id);
    setDrugPrandial((prevPrandial) => {
      const existingPrandial = prevPrandial.find((item) => item.id === Id);
      const updatedPrandial = existingPrandial
        ? prevPrandial.map((item) =>
            item.id === Id
              ? { ...item, bool: bool ? !item.bool : item.bool, drugId: specificDrug }
              : item
          )
        : [...prevPrandial, { id: Id, bool, drugId: specificDrug }];
      return updatedPrandial;
    });
  };

  const handleTiming = (Id, bool) => {
    setTimingId(Id);
    setDrugTiming((prevTiming) => {
      const existingTiming = prevTiming.find((item) => item.id === Id);
      const updatedTiming = existingTiming
        ? prevTiming.map((item) =>
            item.id === Id
              ? { ...item, bool: bool ? !item.bool : item.bool, drugId: specificDrug }
              : item
          )
        : [...prevTiming, { id: Id, bool, drugId: specificDrug }];
      return updatedTiming;
    });
  };

  
  const saveConfiguration = () => {
    const drugConfig = {
      drugId: specificDrug,
      frequency: drugfreq,
      prandial: drugprandial,
      timing: drugtiming,
      dose:dose,
      duration:duration,
       
    };
    dispatch(saveDrugConfiguration(drugConfig));
    setFrequency(false);  
  };

  return (
    <div className="drug_frequency_wrapper">
      <div className="drug_frequency_body">
        <DrugNav name={"Time, Frequency & When"} setFrequency={setFrequency} />

        <div className="choose_div">
          <p>Time</p>
          <div className="choose_div_items">
            {timing.map((time) => (
              <button
                key={time.id}
                className={timingId === time.id ? "active_frequency" : ""}
                onClick={() => handleTiming(time.id, true)}
              >
                {time.timing}
              </button>
            ))}
          </div>
        </div>

        <div className="choose_div">
          <p>When</p>
          <div className="choose_div_items">
            {prandial.map((prandial) => (
              <button
                key={prandial.id}
                className={pranialId === prandial.id ? "active_frequency" : ""}
                onClick={() => handlePrandial(prandial.id, true)}
              >
                {prandial.name}
              </button>
            ))}
          </div>
        </div>

        <div className="choose_div">
          <p>Frequency</p>
          <div className="choose_div_items">
            {frequency.map((frequency) => (
              <button
                className={freqId === frequency.id ? "active_frequency" : ""}
                key={frequency.id}
                onClick={() => handleFrequency(frequency.id, true)}
              >
                {frequency.name}
              </button>
            ))}
          </div>
        </div>

         
        <Drug_footer cancel={"true"} setFrequency={setFrequency} saveConfiguration={saveConfiguration} />
      </div>
    </div>
  );
};

export default DrugFrequency;
