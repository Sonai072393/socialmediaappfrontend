import webApi from "../WebApi/webApi";
import axios from "axios";

export const fetchUsers = async (loginDetails, onSuccess, onFailure) => {
  try {
    const response = await axios.post(`${webApi}/posts/getUser`, {
      userName: loginDetails.userName,
      password: loginDetails.password,
    });
    return onSuccess(response);
  } catch (error) {
    onFailure(
      "Something Wrong! Please Try again later " + error.response.data.message
    );
  }
};
export const fetchUsersProfile = async (userId, onSuccess, onFailure) => {
  try {
    const res = await axios.post(`${webApi}/posts/getProfile`, {
      user_id: userId,
    });

    if (res.status === 201) {
      const response = res.data;
      onSuccess(response[0]);
    } else {
      onFailure("Something Wrong! Please Try again later ");
    }
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error);
  }
};
export const fetchAllUsers = async (userId, onSuccess, onFailure) => {
  try {
    const response = await axios.post(`${webApi}/posts/getUser/list`, {
      userId: userId,
    });
    if (response.status === 201) {
      const r = response.data;
      onSuccess(r);
    } else {
      onFailure("Something Wrong! Please Try again later ");
    }
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error);
  }
};
export const updateUsersProfile = async (
  profileDetail,
  onSuccess,
  onFailure
) => {
  try {
    const res = await axios.post(`${webApi}/posts/updateProfile`, {
      profileDetails: profileDetail,
    });

    if (res.status === 201) {
      const response = res.data;
      onSuccess(response[0]);
    } else {
      onFailure("Something Wrong! Please Try again later ");
    }
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error);
  }
};

export const signUpUser = async (signUpDetails, onSuccess, onFailure) => {
  try {
    const response = await axios.post(`${webApi}/posts/insertUser`, {
      module: "User",
      name: signUpDetails.name,
      email: signUpDetails.email,
      password: signUpDetails.password,
    });

    if (response.status === 201) {
      const r = response.data;
      onSuccess(r);
    } else {
      onFailure("Something Wrong! Please Try again later");
    }
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error);
  }
};

export const emailCheck = async (email, onSuccess, onFailure) => {
  try {
    const response = await axios.post(`${webApi}/posts/emailCheck`, {
      email: email,
    });

    console.log(response);

    if (response.status === 201) {
      const r = response.data;
      onSuccess(r);
    } else {
      onFailure("Something Wrong! Please Try again later");
    }
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error);
  }
};

export const addFriends = async(id,add, onSuccess ,onFailure)=>{
  try {
    const response = await axios.post(`${webApi}/posts/friendList/update`,{
      userId:id,
      friendId:add.user_id,
      friendName:add.name
    })
    if(response.status ===201)
    {
      onSuccess(response.data)
    }
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error);
    
  }
}
