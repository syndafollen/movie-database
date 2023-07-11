import { useEffect, useState } from "react";
import { Box, Typography, Input, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import { API_URL } from "../../constants";
import {refreshAccessToken} from '../../utils.ts'

// /updatepassword

export const SettingsPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isUserUpdateLoading, setIsUserUpdateLoading] = useState(false);

  const handleOldPasswordChange = (event) => {
    setOldPassword(event?.target?.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event?.target?.value);
  };

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("accessToken");
    
    try {
      const response = await axios.put(
        `${API_URL}/updatepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            "x-auth-token": accessToken,
          },
        }
      );

      console.log('response:', response.data)
    } catch (error) {
       if (error.response.status === 401) {
         refreshAccessToken();
         handleSubmit();
       }
    }
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
        <Input
          placeholder="Type old password here"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
        <Input
          placeholder="Type new password here"
          value={newPassword}
          onChange={handleNewPasswordChange}
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
