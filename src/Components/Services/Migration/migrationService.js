import webApi from "../WebApi/webApi";
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//migration
export const dataMigration = createAsyncThunk("dataMigration", async (data) => {
  data.map(async(r,i)=>  {
    console.log(r)
    const response = await axios.post(`${webApi}/posts/dataMigration`, {
      data:r
    });
  }
  )
 
});
