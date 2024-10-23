import React, { useEffect, useState } from "react";
import "./drug_quantity.css";
import DrugNav from "../../components/drug_nav/DrugNav";
import Drug_footer from "../../components/drug_footer/Drug_footer";
import customadd from '../../assets/icons8-add-50.svg'
import customsub from '../../assets/icons8-sub-50 (1).svg'
import {useDispatch,useSelector} from 'react-redux'
import {fetchDays,saveDrugConfiguration} from '../../slices/ApiSlice'

const Drug_Quantity = ({setDuration,setSelectedDuration,specificDrug}) => {
  const [dayslist,setDayslist]=useState([])
  const dispatch=useDispatch()
  const  [dayId,setDayId]=useState("")
  const days=useSelector((state)=>state.medical.days)
  const [drugfreq, setdrugfreq] = useState([]);
  const [drugprandial, setDrugPrandial] = useState([]);
  const [drugtiming, setDrugTiming] = useState([]);
  const [freqId, setfreqId] = useState("");
  const [pranialId, setPrandialId] = useState("");
  const [timingId, setTimingId] = useState("");
  const [dose,setdose]=useState([])
  const [duration,setduration]=useState([])

   
  
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
     
  useEffect(()=>{
    dispatch(fetchDays())
    
  },[dispatch])
  const sendduration=()=>{
    const drugConfig = {
      drugId: specificDrug,
      frequency: drugfreq,
      prandial: drugprandial,
      timing: drugtiming,
      dose:dose,
      duration:dayslist,
       
    };
    dispatch(saveDrugConfiguration(drugConfig));
     
  }
  
  const handleDays=(Id,bool)=>{
    setDayId(Id)
    setDayslist((duration)=>
    {
      const existingDuartion=duration.some((duration)=>duration.id===Id)
      if(existingDuartion){
      return  duration.map((item)=>
        item.id===Id?{id:Id,bool:bool?!item.bool:item.bool,drugId: specificDrug}:item
        )
      }
      else{
        return [{id:Id,bool:bool,drugId: specificDrug}]
      }
    }
    )
  }
   

  return (
    <>
      <div className="drug_quantity_wrapper">
        <div className="drug_quantity_body">
          <DrugNav name={"Duration & Qty"} setDuration={setDuration} />

          <p>Duration</p>
          <div className="days">
         
            <ul >{
              days.map((day)=>{
                return (
                  <li key={day.id} onClick={()=>handleDays(day.id,true)} className={ dayId===day.id?"days_active":""}>{day.day}</li>
                )
              })
              }
            </ul>
            <div className="days_filter">
              <p className="days_line"></p>
              <button className="days_active">Days</button>
              <button>Week</button>
              <button>Month</button>
            </div> 
          </div>
          <div className="custom_qty">
            <p>Custom</p>
            <div className="custom_count">
              <img src={customsub} alt="" />
              <p>7</p>
              <img src={customadd} alt="" />
            </div>
          </div>
          <div className="qty">
            <p>Qty</p>
            <div className="qty_count">
              <h6>4</h6>
              <p>nos</p>
            </div>
          </div>
        <Drug_footer cancel={"true"} sendduration={sendduration} setDuration={setDuration} />
        </div>
      </div>
    </>
  );
};

export default Drug_Quantity;
