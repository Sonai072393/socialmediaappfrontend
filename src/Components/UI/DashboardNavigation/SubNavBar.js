import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import './subNav.css'
//reducer redux
import { useDispatch, useSelector } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";

import { theme, themeMode } from "../../Redux/Features/Theme/theme";
const SubNavBar = () => {
  //redux
  const dispatch = useDispatch();
  const themes = useSelector(themeMode);
  const navigate = useNavigate()
  // const [theme, setTheme] = useState("bright");
  const messagesType = useSelector(selectMsgType);

  const onClickSignOut = (e) => {

    dispatch(
      Alert_Message({
        msgType: messagesType.successMsg,
        msg: "Logout Success!",
      })
    );
    navigate('/')
    localStorage.setItem("loginStatus",false)
  };

  return (
    <div>
      <nav>
        <ul className="dasSubUlNav">
          <li className="signIn" onClick={onClickSignOut}>Sign Out</li>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </div>
  );
};

export default SubNavBar;
