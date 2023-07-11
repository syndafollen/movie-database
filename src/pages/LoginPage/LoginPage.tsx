import { useState } from "react";
import { Button, Input, Box, Typography } from "@mui/joy";
import axios from "axios";
import { Maybe } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event?.target?.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event?.target?.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      `${API_URL}/login`,
      { username, password }
    );

    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;

    if (response.status === 200) {
      setUsername("");
      setPassword("");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setTimeout(()=>{
        navigate("/profile");
      }, [3000])
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Maybe
        when={!isRegistered}
        fallback={<Typography variant="h1">Successfully registered</Typography>}
      >
        <Box display="flex" flexDirection="column" maxWidth={400} width="100%">
          <Typography variant="h4">Login Page</Typography>
          <Input
            onChange={handleUsernameChange}
            value={username}
            name="username"
          />
          <Input
            onChange={handlePasswordChange}
            value={password}
            name="password"
          />
          <Button onClick={handleSubmit}>Sign in</Button>
          <Link to="/">
            <Button>Back to main page</Button>
          </Link>
        </Box>
      </Maybe>
    </Box>
  );
};
