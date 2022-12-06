import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import { RouterProvider } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

//Routes
import { RoutesPaths } from "./Components/Routes/Routes";

import AlertMessage from "./Components/UI/Message/alertMessage";

import { theme, themeMode } from "./Components/Redux/Features/Theme/theme";

function App() {
  const dispatch = useDispatch();
  const themes = useSelector(themeMode);

  //code to find nearest no. in an array
  // let num = [3, 5, 7, 8, 8, 116];
  // let targetNumber =3

  // let diffrence = num.map((r, i) => {
  //   return (Math.abs(targetNumber - r))
  // });
  // let result = num[diffrence.indexOf(Math.min(...diffrence))]
  // console.log(result)
  return (
    <div className={`App${themes}`}>
      <RouterProvider router={RoutesPaths} fallbackElement={<ClipLoader />} />
      <AlertMessage />
    </div>
  );
}

export default App;
