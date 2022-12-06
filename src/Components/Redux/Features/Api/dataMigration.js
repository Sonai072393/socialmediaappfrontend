import { createSlice } from "@reduxjs/toolkit";

//services
import { dataMigration } from "../../../Services/Migration/migrationService";

const migrationList = createSlice({
  name: "migration",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(dataMigration.pending,(state,action)=>{
        state.isLoading = true;
    });
    builder.addCase(dataMigration.fulfilled, (state, action) => {
        state.isLoading = false;
        
        state.data = action.payload;
    });
    builder.addCase(dataMigration.rejected,(state,action)=>{
        console.log("Error",action)
        state.isError = true;

    })
  },
});

export default migrationList.reducer;