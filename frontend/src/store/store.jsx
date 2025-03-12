import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer"; // Import userReducer

const store = configureStore({
  reducer: {
    user: userReducer, // Attach the user reducer
  },
});

export default store;
