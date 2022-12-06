import React, { useState, useEffect } from "react";

//service
import { emailCheck, signUpUser } from "../../Services/User/userServices";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";

//UI
import Card from "../../UI/Card/Card";
import { Circles } from "react-loader-spinner";

//css
import "./signUp.css";
const SignUp = () => {
  //redux
  const dispatch = useDispatch();
  const messagesType = useSelector(selectMsgType);

  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);

  const onSubmitHandler = () => {
    setLoading(true);
    signUpUser(
      userDetails,
      (res) => {
        setLoading(false);
        dispatch(
          Alert_Message({
            msgType: messagesType.successMsg,
            msg: "SignUp Success!",
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
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const onBlurHandler = (event) => {
    setLoadingEmail(true);
    console.log(event.target.value);
    emailCheck(
      event.target.value,
      (res) => {
        setLoadingEmail(true);
        dispatch(
          Alert_Message({
            msgType: messagesType.errorMsg,
            msg: "Email Already Exist",
          })
        );
      },
      (error) => {
        setLoadingEmail(false);
        dispatch(
          Alert_Message({
            msgType: messagesType.successMsg,
            msg: "Continue",
          })
        );
      }
    );
  };
  return (
    <>
      <Card cardTitle="Sign Up" subTitle="to continue.......">
        {loading ? (
          <Circles
            height="25"
            width="25"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            InputLabel="loading"
          />
        ) : (
          <>
            <div className="signUpContainer">
              <div>
                <div className="nameDiv">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="fullName"
                    placeholder="fullName"
                    onChange={onChangeHandler}
                    value={userDetails.name}
                    // disabled={edit ? false : true}
                    // style={
                    //   edit
                    //     ? { color: "black" }
                    //     : { color: "white", caretColor: "transparent" }
                    // }
                  />
                </div>
                <div className="nameDiv">
                  <label className="labels">E-mail</label>
                  <input
                    type="text"
                    name="email"
                    className="name"
                    placeholder="E-mail"
                    onChange={onChangeHandler}
                    value={userDetails.email}
                    onBlur={onBlurHandler}
                    // disabled={edit ? false : true}
                    // style={
                    //   edit
                    //     ? { color: "black" }
                    //     : { color: "white", caretColor: "transparent" }
                    // }
                  />
                </div>
                <div className="nameDiv">
                  {loadingEmail ? (
                    <Circles
                      height="25"
                      width="25"
                      color="#4fa94d"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      InputLabel="loading"
                    />
                  ) : (
                    <>
                      <label className="labels">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="name"
                        placeholder="Password"
                        onChange={onChangeHandler}
                        value={userDetails.password}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="btnContainer">
              <button
                className="submitbtn"
                type="button"
                onClick={onSubmitHandler}
                style={{ width: "100%" }}
              >
                Submit
                {/* {!edit ? "Edit Profile" : "Save Profile"} */}
              </button>
            </div>
          </>
        )}
      </Card>
    </>
  );
};

export default SignUp;
