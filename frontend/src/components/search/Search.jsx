import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitals, fetchLanguages, fetchSpecialties } from "../../slices/ApiSlice";

const StyledChip = styled(Chip)(({ theme }) => ({
  width: "473px",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  background: "#F8F8F8 0% 0% no-repeat padding-box",
  border: "1px solid #E3E3E3",
  borderRadius: "4px",
  "& .MuiChip-label": {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: "Poppins",
    letterSpacing: "0px",
    color: "#0E1824",
  },
  "& .MuiChip-deleteIcon": {
    color: "black",
    marginRight: "10px",
    cursor: "pointer",
    width: "16px",
  },
}));

export default function LimitTags({
  label,
  placeholder,
  asterix,
  count_info,
}) {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);

   
  const hospitals = useSelector((state) => state.medical.hospitals);
  const languages = useSelector((state) => state.medical.languages);
  const specialties = useSelector((state) => state.medical.specialties);
  
  

  useEffect(() => {
    
    dispatch(fetchHospitals());
    dispatch(fetchLanguages());
    dispatch(fetchSpecialties());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setSelectedItems(newValue);
  };

  const cancel = () => {
    setSelectedItems([]);
  };

  return (
    <>
      <div className="input-div">
        <label htmlFor="">
          {label} <span>{asterix}</span>
        </label>
        <Autocomplete
          multiple
          limitTags={2}
          options={label === "Working At" ? hospitals :label==="Languages Known"?languages:label==="Specialitity"?specialties:[]}

          getOptionLabel={(option) => option.name || option.title}
          value={selectedItems}
          onChange={handleChange}
          renderTags={() => null}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <SearchIcon
                    style={{
                      marginRight: "0px",
                      marginTop: "3px",
                    }}
                  />
                ),
                endAdornment: null,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                },
              }}
              inputProps={{
                ...params.inputProps,
                style: {
                  textAlign: "left",
                  marginTop: "6.5px",
                  fontSize: "15px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "2px solid #DBEAE8",
                    height: "51.2px",
                  },
                  "&:hover fieldset": {
                    border: "2px solid #DBEAE8",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #DBEAE8",
                  },
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "0 10px",
                },
              }}
            />
          )}
        />

        <div className="count">
          <h6>{count_info}</h6>
          <p>{selectedItems.length}</p>
          <span onClick={cancel}>CLEAR ALL</span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            width: "100%",
          }}
        >
          {selectedItems.map((item) => (
            <StyledChip
              key={item.name || item.title}
              label={item.name || item.title}
              onDelete={() =>
                setSelectedItems((prev) =>
                  prev.filter(
                    (selectedItem) => selectedItem.name !== item.name
                  )
                )
              }
              deleteIcon={<CloseIcon />}
            />
          ))}
        </div>
      </div>
    </>
  );
}
