// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import medicalReducer from "../slices/ApiSlice";

const store = configureStore({
  reducer: {
    medical: medicalReducer,
  },
});

export default store;
