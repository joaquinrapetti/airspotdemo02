import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [
    {
      id: 0,
      name: "user",
      username: "user@mail.com",
      password: "userpass",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.usersList = [...state.usersList, action.payload];
    },
    // loginUserCheck: (state, action) => {
    //   state.usersList.filter((user) => user.username === payload.username);
    // },
    // setName: (state, action) => {
    //   state.name = action.payload;
    // },
    // setUsername: (state, action) => {
    //   state.username = action.payload;
    // },
    // setPassword: (state, action) => {
    //   state.password = action.payload;
    // },
  },
});

// Export actions
export const { addNewUser, loginUserCheck } = userSlice.actions;

// Export selectors
export const selectUser = (state) => state.user.usersList;
export const selectUserUsername = (state, username) =>
  state.user.userSlice.filter((user) => user.username === username);

// Export reducers
export default userSlice.reducer;
