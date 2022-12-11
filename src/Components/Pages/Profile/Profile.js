import React, { useEffect, useState } from "react";

//service
import {
  fetchUsersProfile,
  updateUsersProfile,
} from "../../Services/User/userServices";

//UI
import Card from "../../UI/Card/Card";

//css
import "./profile.css";
// import "bootstrap/dist/css/bootstrap.min.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";

const Profile = () => {
  //redux
  const dispatch = useDispatch();
  const messagesType = useSelector(selectMsgType);

  const [profileDetail, setProfileDetail] = useState([]);
  const [edit, setEdit] = useState(false);

  const fileUpload = (e) => {
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    fetchUsersProfile(
      Number(localStorage.userId),
      (res) => {
        console.log(res);
        setProfileDetail(res);
      },
      (err) => {
        // console.log(err);
      }
    );
  }, [localStorage]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setProfileDetail({ ...profileDetail, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!edit) {
      setEdit(true);
    } else {
      setEdit(false);
      console.log(profileDetail);
      updateUsersProfile(
        profileDetail,
        (res) => {
          dispatch(
            Alert_Message({
              msgType: messagesType.successMsg,
              msg: "Update Success!",
            })
          );
        },
        (error) => {
          dispatch(
            Alert_Message({
              msgType: messagesType.errorMsg,
              msg: error,
            })
          );
        }
      );
    }
  };

  const onCloseHandler = (event) =>{
    event.preventDefault()
    setEdit(false)
  }
  return (
    <>
      <div className="profileContainer">
        <Card
          cardTitle={profileDetail.name}
          subTitle="Your Profile"
          style={{ width: "100%" }}
        >
          <div className={`${edit === true ? "editRow" : "row"}`}>
            <div className="column1">
              <div>
                <img
                  className="roundedCircleImage"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <div><span>{profileDetail.name}</span></div>
                <div><span>{profileDetail.email}</span></div>
              </div>
            </div>
            <div className="column2">
              <div className="settingHeader">
                <div className="settings">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="nameRow">
                  <div className="nameDiv">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="fullName"
                      placeholder="fullName"
                      onChange={onChangeHandler}
                      value={profileDetail.name}
                      disabled={edit ? false : true}
                      // style={
                      //   edit
                      //     ? { color: "black" }
                      //     : { color: "orange", caretColor: "transparent" }
                      // }
                    />
                  </div>
                </div>
                <div className="infoRow">
                  <div className="infoDivCode">
                    <label className="infoCode">Code</label>
                    <input
                      type="text"
                      className="infoCode"
                      placeholder="+91"
                      value="+91"
                      disabled
                      // style={{ caretColor: "transparent" }}
                    />
                  </div>
                  <div className="infoDivNumber">
                    <label className="info">Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      className="infoNumber"
                      placeholder="Mobile Number"
                      onChange={onChangeHandler}
                      value={profileDetail.mobile}
                      disabled={edit ? false : true}
                      // style={
                      //   edit
                      //     ? { color: "black" }
                      //     : { color: "white", caretColor: "transparent" }
                      // }
                    />
                  </div>
                  <div className="infoDivAddress">
                    <label className="info">Address</label>
                    <input
                      type="text"
                      className="info"
                      placeholder="enter address line 1"
                      onChange={onChangeHandler}
                      value={profileDetail.address}
                      disabled={edit ? false : true}
                      // style={
                      //   edit
                      //     ? { color: "black" }
                      //     : { color: "white", caretColor: "transparent" }
                      // }
                    />
                  </div>
                  <div className="infoDivAddress">
                    <label className="info">Email ID</label>
                    <input
                      type="text"
                      className="info"
                      name="email"
                      placeholder="enter email id"
                      onChange={onChangeHandler}
                      value={profileDetail.email}
                      disabled={edit ? false : true}
                      // style={
                      //   edit
                      //     ? { color: "black" }
                      //     : { color: "white", caretColor: "transparent" }
                      // }
                    />
                  </div>
                </div>
                <div className="nameRow">
                  <div className="nameDiv">
                    <label className="name">Country</label>
                    <input
                      type="text"
                      name="country"
                      className="name"
                      placeholder="country"
                      onChange={onChangeHandler}
                      value={profileDetail.country}
                      disabled={edit ? false : true}
                      // style={
                      //   edit
                      //     ? { color: "black" }
                      //     : { color: "white", caretColor: "transparent" }
                      // }
                    />
                  </div>
                  <div className="nameDiv">
                    <label className="name">State/Region</label>
                    <input
                      type="text"
                      className="name"
                      name="state"
                      placeholder="state"
                      onChange={onChangeHandler}
                      value={profileDetail.state}
                      disabled={edit ? false : true}
                      // style={
                      //   edit
                      //     ? { color: "black" }
                      //     : { color: "white", caretColor: "transparent" }
                      // }
                    />
                  </div>
                </div>
                <div className="btnContainer">
                  <button className="cancelbtn" type="button" onClick={onCloseHandler}>
                    Close
                  </button>
                  <button
                    className="submitbtn"
                    type="button"
                    onClick={onSubmitHandler}
                  >
                    {!edit ? "Edit Profile" : "Save Profile"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Profile;
