import React, { useState } from "react";

//UI
import Card from "../../UI/Card/Card";
import { Circles } from "react-loader-spinner";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";
import { useNavigate } from "react-router-dom";

//css
import "./SignIn.css";

//services
import { fetchUsers } from "../../Services/User/userServices";

const SignIn = () => {
  //redux
  const dispatch = useDispatch();
  const messagesType = useSelector(selectMsgType);

  const [loginDetails, setLoginDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    fetchUsers(
      loginDetails,
      (res) => {
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("userId", res.data.userId);
        navigate("/dashboard");
        dispatch(
          Alert_Message({
            msgType: messagesType.successMsg,
            msg: "Login Success!",
          })
        );
      },
      (error) => {
        setLoading(false);
        dispatch(Alert_Message({ msgType: messagesType.errorMsg, msg: error }));
      }
    );
  };

  const onClickCancel = () => {
    navigate("/");
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <div>
      <Card
        // style={{ marginTop: 45, width: "35%" }}
        cardTitle="Sign In"
        subTitle="Enter your details to login"
      >
        {loading ? (
          <div>
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
          </div>
        ) : (
          <form>
            <div className="container">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="userName"
                required
                onChange={onChange}
              />
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={onChange}
                required
              />
            </div>

            <div className="btnContainer">
              <button
                type="button"
                className="cancelbtn"
                onClick={onClickCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submitbtn"
                onClick={onClickLogin}
              >
                Login
              </button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};

export default SignIn;
