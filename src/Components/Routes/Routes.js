import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

//Pages
import NavigationBar from "../UI/Navigaton/NavigationBar";
import DashboardNavigationBar from "../UI/DashboardNavigation/DashboardNavigationBar";
import { ErrorPage } from "./RoutesError";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Migration from "../Pages/Migrations/Migration";
import SubNavBar from "../UI/DashboardNavigation/SubNavBar";
import Profile from "../Pages/Profile/Profile";
import People from "../Pages/People/People";

export const RoutesPaths = createBrowserRouter([
  {
    collapse: false,
    name: "Home",
    path: "/",
    element: <NavigationBar />,
    children: [
      {
        element: <SignUp/>,
        path: "/",
      },
      {
        // collapse: false,
        name: "Sign",
        path: "/signIn",
        element: <SignIn />,
      },
      // {
      //   // collapse: false,
      //   name: "Migration",
      //   path: "/dataMigration",
      //   element: <Migration />,
      // },
    ],
    errorElement: <ErrorPage />,
  },
 {
    name: "Dashboard",
    path: "/dashboard",
    element: <DashboardNavigationBar />,
    children:[
      {
        name: "Dashboard",
        path: "/dashboard",
        element: <Profile/>,
      },
      {
        name: "People",
        path: "/dashboard/people",
        element: <People/>,
      },
    ]
  }
]);
