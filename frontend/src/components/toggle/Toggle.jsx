import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: '7px',
  margin: '0px', // Ensure there's no extra margin for the switch itself
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#bdbdbd', // Normal grey track color when unchecked
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
       
    }),
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none', // Remove thumb shadow
    width: 17,
    height: 17,
    margin: 1.5,
    backgroundColor: 'white',
    border: 'none', // Ensure no border
  },
  '&.Mui-checked': {
    '& .MuiSwitch-thumb': {
      backgroundColor: 'white', // Keep thumb white when checked
      boxShadow: 'none', // Remove glow
    },
    '& + .MuiSwitch-track': {
      backgroundColor: '#007965', // Set track color to green when checked
    },
  },
  '& .MuiSwitch-switchBase': {
    '&:hover': {
      backgroundColor: 'transparent', // Remove background highlight on hover
    },
    '&:focus-visible': {
      outline: 'none', // Remove focus outline (glow)
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    '& + .MuiSwitch-track': {
      backgroundColor: '#007965', // Ensure green track explicitly here for checked state
      opacity:'1'
    },
  },
}));

export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{ margin: 0 }} // Remove extra margin applied by FormControlLabel
        control={<Android12Switch checked  />}
      />
    </FormGroup>
  );
}
