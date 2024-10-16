import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import '../doctor_info/doctor_info.css'

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: 'Inception', year: 2010 },
  { title: 'Fight Club', year: 1999 },
  { title: 'Pulp Fiction', year: 1994 },
];

export default function LimitTags({label,placeholder,onchange,asterix,count_info,count}) {
  const [selectedFilms, setSelectedFilms] = useState([]);
  const cancel=()=>{
    setSelectedFilms([])
  }

  const handleChange = (event, newValue) => {
    setSelectedFilms(newValue);
  };

  return (
    <>
     <div className="input-div">
     <label htmlFor=""> {label} <span>{asterix}</span></label>
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
                    marginRight: '0px', 
                    marginTop:'3px'
                  }} 
                />
              ),
              endAdornment: null,
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '10px',
              },
            }}
            inputProps={{
              ...params.inputProps,
              style: { textAlign: 'left', marginTop: '6.5px', fontSize: '15px' },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: '2px solid #DBEAE8',
                  height: '51.2px',
                },
                '&:hover fieldset': {
                  border: '2px solid #DBEAE8',
                },
                '&.Mui-focused fieldset': {
                  border: '2px solid #DBEAE8',
                },
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '0 10px',
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

      <div style={{   display: 'flex', flexWrap: 'wrap', gap: '8px', width: '100%' }}>
        {selectedFilms.map((film) => (
          <Chip
            key={film.title}
            label={film.title}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#F8F8F8',
              color: '#0E1824',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '800', // Set font weight directly
              height: '47px',
              border: '2px solid #E9E9E9',
              '& .MuiChip-deleteIcon': {
                color: 'black',
                backgroundColor: 'transparent',
                borderRadius: '0',
                padding: '4px',
                width: '25px',
                height: '25px',
              },
            }}
            onDelete={() =>
              setSelectedFilms((prev) =>
                prev.filter((selectedFilm) => selectedFilm.title !== film.title)
        
              )
            }
          />
        ))}
      </div>
      </div>
    </>
  );
}
