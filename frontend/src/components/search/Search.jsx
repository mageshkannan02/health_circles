import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import "../doctor_info/doctor_info.css";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Inception", year: 2010 },
  { title: "Fight Club", year: 1999 },
  { title: "Pulp Fiction", year: 1994 },
];

// Custom styled Chip component
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
  onchange,
  asterix,
  count_info,
  count,
}) {
  const [selectedFilms, setSelectedFilms] = useState([]);

  const cancel = () => {
    setSelectedFilms([]);
  };

  const handleChange = (event, newValue) => {
    setSelectedFilms(newValue);
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
          options={top100Films}
          getOptionLabel={(option) => option.title}
          value={selectedFilms}
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
          <p>{selectedFilms.length}</p>
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
          {selectedFilms.map((film) => (
            <StyledChip
              key={film.title}
              label={film.title}
              onDelete={() =>
                setSelectedFilms((prev) =>
                  prev.filter(
                    (selectedFilm) => selectedFilm.title !== film.title
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
