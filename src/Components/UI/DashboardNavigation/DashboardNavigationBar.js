import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

//reducer redux
import { useDispatch, useSelector } from "react-redux";
import { theme, themeMode } from "../../Redux/Features/Theme/theme";

//MUI
import DashboardIcon from "@mui/icons-material/Dashboard";

import "./dashboardNavBar.css";
import NavigationBar from "../Navigaton/NavigationBar";
import SubNavBar from "./SubNavBar";

const DashboardNavigationBar = () => {
  const dispatch = useDispatch();
  const themes = useSelector(themeMode);

  return (
    <div>
      <nav>
        <ul
          // className={`nav${themes}`}
          className="dasUlNav"
        >
          <Link to="/dashboard" className="dasLinkNav">
            <div className="dasLiNav">
              <DashboardIcon className="dasLiNav"/>
              <li className="dasLiNav">Dashboard</li>
            </div>
          </Link>

          {/* <Link to="/dashboard" className="dasLiNav">
            <DashboardIcon className="dasLiNav" />
            <li className="dasLiNav">Friends</li>
          </Link>
          <Link to="/dashboard" className="dasLiNav">
            <DashboardIcon className="dasLiNav" />
            <li className="dasLiNav">All Users</li>
          </Link> */}
        </ul>
      </nav>

      <div className="details">
        <SubNavBar />
        <div className="dashNavDetails">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigationBar;
