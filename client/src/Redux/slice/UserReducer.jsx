import { createSlice } from "@reduxjs/toolkit";
import { ListData } from "../../utils/ListData";

const userSlice = createSlice({
  name: "users",
  initialState: { users: [...ListData] },
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.users?.push({
        patient_id: state.users.length + 1,
        ...action.payload,
      });
    },

    updateUser: (state, action) => {
      const { patient_id, full_name, age, email } = action.payload;
      console.log(action);
      const index = state.users.findIndex(
        (obj) => patient_id == obj.patient_id
      );
      state.users[index] = { patient_id, full_name, age, email };
    },
    removeUser(state, action) {
      const index = state.users.findIndex(
        (obj) => obj.patient_id == action.payload
      );
      state.users.splice(index, 1);
      console.log(action);
    },
    clearAllUser(state, action) {
      state.users = [];
    },
  },
});
export const { addUser, updateUser, removeUser, clearAllUser } =
  userSlice.actions;
export default userSlice.reducer;
