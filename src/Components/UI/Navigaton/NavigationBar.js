import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


//CSS Import
import "./navigationBar.css";

// mui
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import Brightness4Icon from '@mui/icons-material/Brightness4';

//reducer redux
import { useDispatch, useSelector } from "react-redux";
import {theme,themeMode} from "../../Redux/Features/Theme/theme";
const NavigationBar = () => {
  //redux
  const dispatch = useDispatch()
  const themes = useSelector(themeMode)
  // const [theme, setTheme] = useState("bright");

  const onThemeDark = (e) => {
    console.log(e)
    dispatch(
      theme({mode:"Dark"})
    )
    document.body.className = "bodyDark";

  };

  const onThemeBright =()=>{
    dispatch(
      theme({mode:"Bright"})
    )
    document.body.className = "bodyBright";
  };
  
  return (
    <div>
      <nav>
        <ul className={`nav${themes}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* migration tab */}
          {/* <Link to="/dataMigration">
            <li>Migration</li>
          </Link> */}

          <Link to="/signIn">
            <li className="signIn">Sign In</li>
          </Link>
          {themes === "Bright" ? (
            <Link>
              <li className="modeBtnBrit" name="bright"onClick={onThemeDark}>
                <Brightness4OutlinedIcon />
              </li>
            </Link>
          ) : (
            <Link>
            <li className="modeBtnBrit" name="dark" onClick={onThemeBright}>
              <Brightness4Icon />
            </li>
          </Link>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
