import React from "react";
import LimitTags from "../search/Search";
import "./doctor_info.css";
import Inputfield from "../InputField/Inputfield";

const Doctor_info = () => {
  return (
    <>
      <div className="info-wrapper">
        <Inputfield
          label={"Name"}
          asterix={"*"}
          placeholder={"Enter the name"}
        />
        <Inputfield
          label={"Qualification"}
          asterix={"*"}
          placeholder={"Enter your qualification"}
        />

        <LimitTags
          label={"Working At"}
          asterix={"*"}
          placeholder={"Hospitals, Clinic, etc"} count_info={"Places Added"} count={0}
        />

        <LimitTags
          label={"Specialitity"}
          asterix={"*"}
          placeholder={"Enter your specialitity"} count_info={"Speciality Added"} count={0}
        />
        
        <Inputfield
          label={"Serving From"}
          asterix={"*"}
          placeholder={"Enter the date"} type={"date"}
        />
        <Inputfield
          label={"Address"}
           
          placeholder={"Enter your address"} type={"textarea"}
        />
        <LimitTags
          label={"Languages Known"}
          asterix={"*"}
          placeholder={"Enter the languages"} count_info={"Languages Added"} count={0}
        />
        <Inputfield
          label={"About"}
           
          placeholder={"About yourself"} type={"textarea"}
        />
        
      </div>
    </>
  );
};

export default Doctor_info;
