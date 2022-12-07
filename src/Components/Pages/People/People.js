import React, { useEffect, useState } from "react";

//service
import {
  fetchUsersProfile,
  updateUsersProfile,
} from "../../Services/User/userServices";

//UI
import Card from "../../UI/Card/Card";

//css
// import "./profile.css";
// import "bootstrap/dist/css/bootstrap.min.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";

const People = () => {
  //redux
  const dispatch = useDispatch();
  const messagesType = useSelector(selectMsgType);

  const [profileDetail, setProfileDetail] = useState([]);
  const [edit, setEdit] = useState(false);

  const fileUpload = (e) => {
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    
  }, [localStorage]);


  return (
    <>
      <div className="profileContainer">
        <Card
          cardTitle="People List"
          subTitle="user presents..."
          style={{ width: "100%" }}
        >
          
        </Card>
      </div>
    </>
  );
};

export default People;
