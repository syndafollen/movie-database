import { useEffect, useState } from "react";
import { Box, Typography, Input, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import { refreshAccessToken } from "../../utils.ts";
import './profile.css'

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
        console.log('error: ', error)
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
    <Box style={{ position: "fixed", top: 50, left: 50 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            width: 200,
            height: 200,
          }}
        >
          <img src={userData?.avatar} className="avatar" />
        </Box>
        <Typography level="h3" color="primary">
          Username: {userData?.key}
        </Typography>
        <Typography level="h3" color="primary">
          E-mail: {userData?.email}
        </Typography>
        <Input
          placeholder="Type image url here"
          value={userAvatar}
          onChange={handleAvatarChange}
        />
        <Input
          placeholder="Type email here"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <Button onClick={handleSubmit} loading={isUserUpdateLoading}>
          Submit
        </Button>
        <Link to="/">
          <Button>Back to main page</Button>
        </Link>
      </Box>
    </Box>
  );
};
