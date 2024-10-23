import React, { useEffect, useState } from "react";
import "./drug_timing.css";
import DrugNav from "../../components/drug_nav/DrugNav";
import Drug_footer from "../../components/drug_footer/Drug_footer";
import { fetchDoses } from "../../slices/ApiSlice";
import { useSelector, useDispatch } from "react-redux";
import {saveDrugConfiguration} from '../../slices/ApiSlice'

const DrugTiming = ({
  setIsdose,
  setFrequency,
  setSelctedDose=()=>{},
  specificDrug,sendupdateddose=()=>{}
}) => {
  const [drugdoses, setdrugDoses] = useState([]);
  const dispatch = useDispatch();
  
  const handleSenddoses = () => {
    const dosedata={
      drugId:specificDrug,
      dose:drugdoses
    }
    
     dispatch(saveDrugConfiguration(dosedata))
     
  };
  console.log(drugdoses);
  
  

   
  useEffect(() => {
    dispatch(fetchDoses());
  }, [dispatch]);
  const doses = useSelector((state) => state.medical.doses);
  
 
  const handleDoseselect = (id, bool) => {
    
    setdrugDoses((dose) => {
      const existingdose = dose.find((dose) => dose.id === id);

      if (existingdose) {
       return  dose.map((dose) => 
           
          dose.id === id ? {...dose,
            id: id,
            bool: bool ,
            drugId: specificDrug,
          }:dose,
        );
      } else {
        return [...dose, { id: id,bool:bool, drugId: specificDrug }];
      }
    });
  };

  

  return (
    <>
      <div className="drug_timing_wrapper">
        <div className="timing_popup">
          <DrugNav
            name={"Dose"}
            setIsdose={setIsdose}
            setFrequency={setFrequency}
          />
          <div className="timing_body">
            {doses.map((dose) => {
              return (
                <div className="prandial_div" key={dose.id}>
                  <p>{dose.dosage_session}</p>
                  <div className="prandial_selection_div">
                    <p onClick={() => handleDoseselect(dose.id, false)}  >0</p>
                    <p onClick={() => handleDoseselect(dose.id, true)}>1</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Drug_footer
            cancel={"true"} handleSenddoses={handleSenddoses}
            
            setIsdose={setIsdose} sendupdateddose={sendupdateddose}
          />
        </div>
      </div>
    </>
  );
};

export default DrugTiming;
 
