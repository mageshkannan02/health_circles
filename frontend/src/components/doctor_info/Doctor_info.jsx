import React, { useEffect, useState } from "react";
import LimitTags from "../search/Search";
import "./doctor_info.css";
import Inputfield from "../InputField/Inputfield";
 


const Doctor_info = ({setDoctordata}) => {
  const [doc_data,setdoc_data]=useState(
   {
       name:"",
       qualification:"",
       workingAt:[],
       speciality:[],
       serving_from:"",
       address:"",
       languages:[],
       about:""

  })

 useEffect(()=>{
  setDoctordata(doc_data)
 },[doc_data])
  
  const handledoctordata=(e)=>{
    const {name,value}=e.target;
    setdoc_data((prev)=>{
      return {

        ...prev,[name]:value
      }
      
    })
  } 
  const handleArraydoctors=(name,newvalue)=>{
    setdoc_data((prev)=>{
          return{
            ...prev,[name]:newvalue
          }
        })
  }

  return (
    <>
      <div className="info-wrapper">
        <Inputfield
          label={"Name"} name={"name"}
          asterix={"*"}
          placeholder={"Enter the name"} handledoctordata={handledoctordata}
        />
        <Inputfield
          label={"Qualification"}
          asterix={"*"} name={"qualification"}
          placeholder={"Enter your qualification"} handledoctordata={handledoctordata}
        />

        <LimitTags
          label={"Working At"}
          asterix={"*"} name={"workingAt"}
          placeholder={"Hospitals, Clinic, etc"} count_info={"Places Added"}  handleArraydoctors={handleArraydoctors}
        />

        <LimitTags
          label={"Specialitity"}
          asterix={"*"} name={"speciality"}
          placeholder={"Enter your specialitity"} count_info={"Speciality Added"} handleArraydoctors={handleArraydoctors}
        />
        
        <Inputfield
          label={"Serving From"}
          asterix={"*"} name={"serving_from"}
          placeholder={"Enter the date"} type={"date"} handledoctordata={handledoctordata}
        />
        <Inputfield
          label={"Address"}
           name={"address"}
          placeholder={"Enter your address"} type={"textarea"} handledoctordata={handledoctordata}
        />
        <LimitTags
          label={"Languages Known"}
          asterix={"*"} name={"languages"}
          placeholder={"Enter the languages"} count_info={"Languages Added"} handleArraydoctors={handleArraydoctors}
        />
        <Inputfield
          label={"About"}
           name={"about"}
          placeholder={"About yourself"} type={"textarea"} handledoctordata={handledoctordata}
        />
        
      </div>
    </>
  );
};

export default Doctor_info;
