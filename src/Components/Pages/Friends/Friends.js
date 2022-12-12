import React, { useEffect, useState } from "react";

//service
import {
  addFriends,
  fetchAllUsers,
  fetchUsersProfile,
  updateUsersProfile,
} from "../../Services/User/userServices";

//UI
import Card from "../../UI/Card/Card";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

//css
// import "./people.css";
// import "bootstrap/dist/css/bootstrap.min.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsgType,
} from "../../Redux/Features/Alert/alertSlice";

const Friends = () => {
  //redux
  const dispatch = useDispatch();
  const messagesType = useSelector(selectMsgType);

  const [peopleDetail, setPeopleDetail] = useState([]);

  useEffect(() => {
    fetchAllUsers(
      localStorage.userId,
      (res) => {
        console.log(res.userList);
        setPeopleDetail(res.userList);
        // setAdd(false)
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
  }, []);

//   const onAddFriend = (event) => {
//     console.log(event);
//     addFriends(
//       localStorage.userId,
//       event,
//       (res) => {
//         console.log(res);
//         setAdd(true);

//         dispatch(
//           Alert_Message({
//             msgType: messagesType.successMsg,
//             msg: "Added",
//           })
//         );
//       },
//       (error) => {
//         dispatch(
//           Alert_Message({
//             msgType: messagesType.errorMsg,
//             msg: error,
//           })
//         );
//       }
//     );
//   };
  return (
    <>
      <div className="peopleContainer">
        <Card
          cardTitle="Friends List"
          subTitle="Yours Buddys..."
          style={{ width: "50%" }}
        >
          {peopleDetail.map((r, i) => (
            <div className="listContainer" key={i}>
              <div className="peopleList">
                <div className="imgNameDiv">
                  <img
                    className="roundedCircleImagePeople"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                </div>
                <div>{r.name}</div>

                {/* <div>
                  <button onClick={() => onAddFriend(r)} disabled={r.status}>
                    <PersonAddAlt1OutlinedIcon />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
};

export default Friends;
