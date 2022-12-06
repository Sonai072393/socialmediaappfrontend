import React from "react";

//mui
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
//css
import "./buttonSwitch.css";
export const ButtonSwitch = ({themeChange}) => {

  return (
    // <div>
        <Brightness4OutlinedIcon onClick={themeChange}/>
    // </div>
  );
};
