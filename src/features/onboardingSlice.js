import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    changeOnboardingCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export actions
export const { changeOnboardingCount } = onboardingSlice.actions;

// Export selectors
export const selectOnboardingItem = (state) => state.onboarding.value;

// Export reducers
export default onboardingSlice.reducer;
