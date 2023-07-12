import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import { refreshAccessToken } from "../../utils.ts";
import "./profile.css";

export const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [isUserUpdateLoading, setIsUserUpdateLoading] = useState(false);

  const handleEmailChange = (event) => {
    setUserEmail(event?.target?.value);
  };

  const handleAvatarChange = (event) => {
    setUserAvatar(event?.target?.value);
  };

  useEffect(() => {
    async function fetchProfileData() {
      const accessToken = localStorage.getItem("accessToken");

      try {
        const { data } = await axios.get(`${API_URL}/me`, {
          headers: {
            "x-auth-token": accessToken,
          },
        });

        setUserData(data);
      } catch (error) {
        if (error.response.status === 401) {
          refreshAccessToken();
          fetchProfileData();
        }
        console.log("error: ", error);
      }
    }

    fetchProfileData();
  }, []); // Or [] if effect doesn't need props or state

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("accessToken");
    setIsUserUpdateLoading(true);

    const { data } = await axios.put(
      `${API_URL}/profile`,
      { email: userEmail, avatar: userAvatar },
      {
        headers: {
          "x-auth-token": accessToken,
        },
      }
    );

    setUserData(data?.updatedUser);
    setUserEmail("");
    setUserAvatar("");
    setIsUserUpdateLoading(false);
  };

  return (
    <div>
      <div>
        <div>
          <img src={userData?.avatar} className="avatar" />
        </div>
        <h1>Username: {userData?.key}</h1>
        <h1>E-mail: {userData?.email}</h1>
        <input
          placeholder="Type image url here"
          value={userAvatar}
          onChange={handleAvatarChange}
        />
        <input
          placeholder="Type email here"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubmit} loading={isUserUpdateLoading}>
          Submit
        </button>
        <Link to="/">
          <button>Back to main page</button>
        </Link>
      </div>
    </div>
  );
};
