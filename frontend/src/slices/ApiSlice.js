import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://localhost:4000/health";

 
export const fetchHospitals = createAsyncThunk("medical/fetchHospitals", async () => {
  const response = await axios.get(`${base_url}/hospitals`);
  return response.data;
});

export const fetchLanguages = createAsyncThunk("medical/fetchLanguages", async () => {
  const response = await axios.get(`${base_url}/languages`);
  return response.data;
});

export const fetchSpecialties = createAsyncThunk("medical/fetchSpecialties", async () => {
  const response = await axios.get(`${base_url}/fields`);
  return response.data;
});

 
export const fetchRxGroups = createAsyncThunk("medical/fetchRxGroups", async () => {
  const response = await axios.get(`${base_url}/rxgroups`);
  return response.data;
});

export const fetchAssociations = createAsyncThunk("medical/fetchAssociations", async () => {
  const response = await axios.get(`${base_url}/rxassociations`);
  return response.data;
});

export const fetchPrescription = createAsyncThunk("medical/fetchPrescription", async () => {
  const response = await axios.get(`${base_url}/prescription`);
  return response.data;
});

export const fetchDrugs = createAsyncThunk("medical/fetchDrugs", async () => {
  const response = await axios.get(`${base_url}/drugs`);
  return response.data;
});
export const fetchTiming=createAsyncThunk("timing",async()=>{
  const response=await  axios.get(`${base_url}/timing`)
  return response.data
})
export const fetchDoses=createAsyncThunk("doses",async()=>{
  const response=await axios.get(`${base_url}/doses`)
  return response.data
})
export const fetchFrequency=createAsyncThunk("frequency",async()=>{
  const response=await axios.get(`${base_url}/frequency`)
  return response.data
})
export const fetchPrandial=createAsyncThunk("prandial",async()=>{
  const response=await axios.get(`${base_url}/prandial`)
  return response.data
})
export const fetchDays=createAsyncThunk("days",async()=>{
  const response=await axios.get(`${base_url}/days`)
  return response.data
})
export const saveDrugConfiguration = createAsyncThunk('medical/saveDrugConfiguration', async (drugConfig) => {
 
  return drugConfig;
});
 

  
const medicalSlice = createSlice({
  name: "medical",
  initialState: {
    hospitals: [],
    languages: [],
    specialties: [],
    rxGroups: [],        
    associations: [],
    prescription: [],
    drugs: [],
    timing:[],
    doses:[],
    days:[],
    prandial:[],
    frequency:[],
    status: "idle",
    error: null,
    drugConfigs: {},
    
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle hospitals
    builder.addCase(fetchHospitals.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchHospitals.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.hospitals = action.payload;
    });
    builder.addCase(fetchHospitals.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Handle languages
    builder.addCase(fetchLanguages.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLanguages.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.languages = action.payload;
    });
    builder.addCase(fetchLanguages.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Handle specialties
    builder.addCase(fetchSpecialties.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSpecialties.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.specialties = action.payload;
    });
    builder.addCase(fetchSpecialties.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Handle rxGroups
    builder.addCase(fetchRxGroups.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRxGroups.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rxGroups = action.payload;
    });
    builder.addCase(fetchRxGroups.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Handle associations
    builder.addCase(fetchAssociations.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAssociations.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.associations = action.payload;
    });
    builder.addCase(fetchAssociations.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Handle prescription
    builder.addCase(fetchPrescription.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPrescription.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.prescription = action.payload;
    });
    builder.addCase(fetchPrescription.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Handle drugs
    builder.addCase(fetchDrugs.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchDrugs.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.drugs = action.payload;
    });
    builder.addCase(fetchDrugs.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    //handle timing
    builder.addCase(fetchTiming.pending,(state,action)=>{
      state.status="loading";
    })
    builder.addCase(fetchTiming.fulfilled,(state,action)=>{
      state.status="Succeed",
      state.timing=action.payload
    })
    builder.addCase(fetchTiming.rejected,(state,action)=>{
      state.status="error";
      state.error=action.error.message
    })
    //handledose
     
    builder.addCase(fetchDoses.pending,(state)=>{
      state.status="loading";
    })
    builder.addCase(fetchDoses.fulfilled,(state,action)=>{
      state.status="Succeed",
      state.doses=action.payload
    })
    builder.addCase(fetchDoses.rejected,(state,action)=>{
      state.status="error";
      state.error=action.error.message
    })
    //handle frequency
    builder.addCase(fetchFrequency.pending,(state)=>{
      state.status="loading";
    })
    builder.addCase(fetchFrequency.fulfilled,(state,action)=>{
      state.status="Succeed",
      state.frequency=action.payload
    })
    builder.addCase(fetchFrequency.rejected,(state,action)=>{
      state.status="error";
      state.error=action.error.message
    })
    // handleprandial
    builder.addCase(fetchPrandial.pending,(state)=>{
      state.status="loading";
    })
    builder.addCase(fetchPrandial.fulfilled,(state,action)=>{
      state.status="Succeed",
      state.prandial=action.payload
    })
    builder.addCase(fetchPrandial.rejected,(state,action)=>{
      state.status="error";
      state.error=action.error.message
    })
    //handleDays
    builder.addCase(fetchDays.pending,(state)=>{
      state.status="loading";
    })
    builder.addCase(fetchDays.fulfilled,(state,action)=>{
      state.status="Succeed",
      state.days=action.payload
    })
    builder.addCase(fetchDays.rejected,(state,action)=>{
      state.status="error";
      state.error=action.error.message
    })
    //handle saveddrugs
    .addCase(saveDrugConfiguration.fulfilled, (state, action) => {
      const { drugId, frequency, timing, prandial,dose ,duration} = action.payload;
      state.drugConfigs[drugId] = { drugId ,frequency, timing, prandial,dose ,duration};
    });
    
    
   


  },
});

export default medicalSlice.reducer;
