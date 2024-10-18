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
    status: "idle",
    error: null,
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
  },
});

export default medicalSlice.reducer;
