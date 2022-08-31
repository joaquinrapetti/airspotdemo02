import { configureStore } from "@reduxjs/toolkit";

// Reducers Imports
import onboardingReducer from "./src/features/onboardingSlice";
import userReducer from "./src/features/userSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    user: userReducer,
  },
});
