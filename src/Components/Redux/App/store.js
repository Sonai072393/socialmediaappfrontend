import { configureStore } from "@reduxjs/toolkit";

//alert msg
import msgReducer from '../Features/Alert/alertSlice'

//darkmode toggles
import themeSlice  from "../Features/Theme/theme";

//api
import migrationList from '../Features/Api/dataMigration' 

// console.log(msgReducer,"msgReducer")
export default configureStore({
    
    reducer: {
        alertMessage: msgReducer,
        migrated:migrationList,
        theme:themeSlice
    },

  });
  