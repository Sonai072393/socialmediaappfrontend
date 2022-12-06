import { createSlice } from "@reduxjs/toolkit";

//services
import { fetchUsers } from "../../../Services/User/userServices";

const userList = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending,(state,action)=>{
        state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action,"lll",state)
        state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected,(state,action)=>{
        console.log("Error",action)
        state.isError = true;

    })
  },
});

export default userList.reducer;